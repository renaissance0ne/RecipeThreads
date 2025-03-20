"use client";

import { z } from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { 
  FaBold, 
  FaItalic, 
  FaUnderline,
  FaLink
} from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Dock from "@/components/cards/Dock";

import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread } from "@/lib/actions/thread.actions";
import { rephraseText } from "@/lib/utils/gemini";

interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

function Comment({ threadId, currentUserImg, currentUserId }: Props) {
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState("");
  const [isRephrasing, setIsRephrasing] = useState(false);
  
  // State for hyperlink dialog
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [selectionRange, setSelectionRange] = useState<{start: number, end: number}>({start: 0, end: 0});

  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  // Handle text selection directly
  const handleSelection = () => {
    if (!inputRef.current) return;
    
    const input = inputRef.current;
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    
    if (start !== end) {
      const selected = input.value.substring(start, end);
      setSelectedText(selected);
      
      // Store selection range for later use (especially for hyperlinks)
      setSelectionRange({
        start: start,
        end: end
      });
      
      // Calculate position
      const inputRect = input.getBoundingClientRect();
      const approxCharWidth = 8; // Estimate of character width in pixels
      
      setSelectionPosition({
        x: inputRect.left + 10 + (start * approxCharWidth) + ((end - start) * approxCharWidth / 2),
        y: inputRect.top - 50
      });
      
      setIsSelecting(true);
    } else {
      setIsSelecting(false);
    }
  };

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    
    // Direct event listeners for selection
    const mouseUpHandler = () => setTimeout(handleSelection, 10);
    const keyUpHandler = (e: KeyboardEvent) => {
      // Check for selection keys (shift + arrow keys, etc.)
      if (e.shiftKey || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setTimeout(handleSelection, 10);
      }
    };
    
    input.addEventListener('mouseup', mouseUpHandler);
    input.addEventListener('keyup', keyUpHandler);
    
    // Click outside handler to close dock
    const outsideClickHandler = (e: MouseEvent) => {
      if (isSelecting && !inputRef.current?.contains(e.target as Node) && 
          !document.querySelector('.dock-container')?.contains(e.target as Node) &&
          !showLinkDialog) { // Don't hide selection if link dialog is open
        setIsSelecting(false);
      }
    };
    
    document.addEventListener('mousedown', outsideClickHandler);
    
    return () => {
      input.removeEventListener('mouseup', mouseUpHandler);
      input.removeEventListener('keyup', keyUpHandler);
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  }, [isSelecting, showLinkDialog]);

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname
    );

    setIsSelecting(false);
    form.reset();
  };

  const applyFormatting = (formatType: string) => {
    if (!inputRef.current) return;
    
    const input = inputRef.current;
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const selectedText = input.value.substring(start, end);
    
    let formattedText = "";
    let newCursorPos = end;
    
    switch (formatType) {
      case "bold":
        formattedText = `**${selectedText}**`;
        newCursorPos = end + 4;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        newCursorPos = end + 2;
        break;
      case "underline":
        formattedText = `__${selectedText}__`;
        newCursorPos = end + 4;
        break;
      case "hyperlink":
        // Open dialog for URL input
        openLinkDialog();
        return;
      case "rephrase":
        handleRephrase(start, end, selectedText);
        return;
    }
    
    const newValue = input.value.substring(0, start) + formattedText + input.value.substring(end);
    
    form.setValue('thread', newValue);
    
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(newCursorPos, newCursorPos);
      setIsSelecting(false);
    }, 10);
  };

  const openLinkDialog = () => {
    setShowLinkDialog(true);
    setLinkUrl("");
  };

  const applyHyperlink = () => {
    if (!inputRef.current || !linkUrl.trim()) return;
    
    const { start, end } = selectionRange;
    const selectedText = inputRef.current.value.substring(start, end);
    
    // Format: [text](url)
    const markdownLink = `[${selectedText}](${linkUrl})`;
    
    const currentValue = form.getValues('thread');
    const newValue = currentValue.substring(0, start) + markdownLink + currentValue.substring(end);
    
    form.setValue('thread', newValue);
    
    // Close dialog and reset
    setShowLinkDialog(false);
    setIsSelecting(false);
    
    // Set cursor after the link
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        const newCursorPos = start + markdownLink.length;
        inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
      }
    }, 10);
  };

  const handleRephrase = async (start: number, end: number, text: string) => {
    if (!text.trim()) return;
    
    setIsRephrasing(true);
    setIsSelecting(false);
    
    try {
      const rephrasedText = await rephraseText(text);
      
      if (inputRef.current) {
        const input = inputRef.current;
        const currentValue = form.getValues('thread');
        const newValue = currentValue.substring(0, start) + rephrasedText + currentValue.substring(end);
        
        form.setValue('thread', newValue);
        
        setTimeout(() => {
          input.focus();
          const newCursorPos = start + rephrasedText.length;
          input.setSelectionRange(newCursorPos, newCursorPos);
        }, 10);
      }
    } catch (error) {
      console.error('Error rephrasing text:', error);
    } finally {
      setIsRephrasing(false);
    }
  };

  const formattingItems = [
    { 
      icon: <FaBold size={20} color="#fff" />, 
      label: 'Bold', 
      onClick: () => applyFormatting("bold"),
      className: 'text-white'
    },
    { 
      icon: <FaItalic size={20} color="#fff" />, 
      label: 'Italic', 
      onClick: () => applyFormatting("italic"),
      className: 'text-white'
    },
    { 
      icon: <FaUnderline size={20} color="#fff" />, 
      label: 'Underline', 
      onClick: () => applyFormatting("underline"),
      className: 'text-white'
    },
    {
      icon: <FaLink size={20} color="#fff" />,
      label: 'Hyperlink',
      onClick: () => applyFormatting("hyperlink"),
      className: 'text-white'
    },
    { 
      icon: isRephrasing ? <Spinner size={20} /> : <FaWandMagicSparkles size={20} color="#fff" />, 
      label: isRephrasing ? 'Rephrasing...' : 'Rephrase', 
      onClick: () => !isRephrasing && applyFormatting("rephrase"),
      className: `text-white ${isRephrasing ? 'opacity-50 cursor-not-allowed' : ''}`
    },
  ];

  return (
    <Form {...form}>
      <form ref={formRef} className='comment-form' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='thread'
          render={({ field }) => (
            <FormItem className='flex w-full items-center gap-3'>
              <FormLabel>
                <Image
                  src={currentUserImg}
                  alt='current_user'
                  width={48}
                  height={48}
                  className='rounded-full object-cover'
                />
              </FormLabel>
              <FormControl className='border-none bg-transparent'>
                <Input
                  type='text'
                  {...field}
                  ref={(e) => {
                    field.ref(e);
                    inputRef.current = e;
                  }}
                  onSelect={handleSelection}
                  placeholder='Comment...'
                  className='no-focus text-light-1 outline-none'
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type='submit' className='comment-form_btn'>
          Reply
        </Button>
        

        {/* Hyperlink Dialog - Now inside Form context */}
              <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
                <DialogContent className="bg-dark-3 text-light-1 border-dark-4">
                  <DialogHeader>
                    <DialogTitle>Add Hyperlink</DialogTitle>
                  </DialogHeader>
                  
                  <div className="py-4">
                    <FormLabel className="text-light-2 mb-2 block">URL</FormLabel>
                    <Input
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="bg-dark-4 border-dark-5 text-light-1"
                      autoFocus
                    />
                  </div>
                  
                  <DialogFooter>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowLinkDialog(false)}
                      className="mr-2 bg-primary-500"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={applyHyperlink} 
                      className="bg-primary-500"
                      disabled={!linkUrl.trim()}
                    >
                      Apply
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
        
              {/* Dock for formatting tools */}
              <Dock 
                items={formattingItems}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
                isVisible={isSelecting}
                position={selectionPosition}
                className="bg-black backdrop-blur-md"
              />
      </form>
    </Form>
  );
}

export default Comment;