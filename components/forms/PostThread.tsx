"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { 
  FaBold, 
  FaItalic, 
  FaUnderline,
  FaEye,
  FaEdit
} from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner"; // You'll need to create this component

import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";
import Dock from "@/components/cards/Dock";
import { rephraseText } from "@/utils/gemini";
import { testRephrase } from '@/utils/api-test';


interface Props {
  userId: string;
}

function PostThread({ userId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { organization } = useOrganization();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
  // State for text selection
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [previewContent, setPreviewContent] = useState("");
  const [isRephrasing, setIsRephrasing] = useState(false);

  const form = useForm<z.infer<typeof ThreadValidation>>({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  });

  // Custom text selection handler
  useEffect(() => {
    const handleSelectionChange = () => {
      if (previewMode) return;
      
      const selection = window.getSelection();
      
      if (selection && selection.toString().trim() !== '' && 
          document.activeElement === textAreaRef.current) {
        setSelectedText(selection.toString());
        setIsSelecting(true);
        
        // Get the position for the dock
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        setSelectionPosition({
          x: rect.left + (rect.width / 2),
          y: rect.top - 40 + window.scrollY
        });
      } else {
        // Small delay to allow for clicking the dock items
        setTimeout(() => {
          setIsSelecting(false);
          setSelectedText("");
        }, 200);
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    document.addEventListener('mouseup', handleSelectionChange);
    
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('mouseup', handleSelectionChange);
    };
  }, [previewMode]);

  // Update preview content when thread content changes
  useEffect(() => {
    let content = form.getValues('thread');
    // Bold
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Underline
    content = content.replace(/__(.*?)__/g, '<u>$1</u>');
    // Paragraphs
    content = content.replace(/\n/g, '<br>');
    
    setPreviewContent(content);
  }, [form.watch('thread')]);

  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
    // Save markdown format for server-side rendering
    // This ensures the format is preserved when posting
    await createThread({
      text: values.thread,
      author: userId,
      communityId: organization ? organization.id : null,
      path: pathname,
    });

    router.push("/");
  };

  const applyFormatting = (formatType: string) => {
    if (!textAreaRef.current) return;
    
    const textarea = textAreaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
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
      case "rephrase":
        handleRephrase(start, end, selectedText);
        return;
    }
    
    const newValue = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end);
    
    form.setValue('thread', newValue);
    
    // Reset selection and cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      setIsSelecting(false);
    }, 10);
  };

  const handleRephrase = async (start: number, end: number, text: string) => {
    if (!text.trim()) return;
    
    setIsRephrasing(true);
    setIsSelecting(false);
    
    try {
      const rephrasedText = await rephraseText(text);
      
      if (textAreaRef.current) {
        const textarea = textAreaRef.current;
        const currentValue = form.getValues('thread');
        const newValue = currentValue.substring(0, start) + rephrasedText + currentValue.substring(end);
        
        form.setValue('thread', newValue);
        
        // Set cursor at the end of the rephrased text
        setTimeout(() => {
          textarea.focus();
          const newCursorPos = start + rephrasedText.length;
          textarea.setSelectionRange(newCursorPos, newCursorPos);
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
      icon: isRephrasing ? <Spinner size={20} /> : <FaWandMagicSparkles size={20} color="#fff" />, 
      label: isRephrasing ? 'Rephrasing...' : 'Rephrase', 
      onClick: () => !isRephrasing && applyFormatting("rephrase"),
      className: `text-white ${isRephrasing ? 'opacity-50 cursor-not-allowed' : ''}`
    },
  ];
  

  return (
    <>
      <div className="flex items-center justify-end mb-4 gap-2">
        {/*For testing purposes only*/}
        {/* <Button 
          onClick={() => testRephrase()} 
          variant="outline"
          className="text-white"
        >
          Test API
        </Button> */}

        <Button 
          variant="outline" 
          onClick={() => setPreviewMode(!previewMode)}
          className="text-white flex items-center gap-2 bg-primary-500 border-primary-500" 
        >
          {previewMode ? (
            <>
              <FaEdit size={16} /> Edit Mode
            </>
          ) : (
            <>
              <FaEye size={16} /> Preview Mode
            </>
          )}
        </Button>
      </div>

      <Form {...form}>
        <form
          className='mt-6 flex flex-col justify-start gap-10'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {previewMode ? (
            <div className="w-full">
              <div 
                className="w-full min-h-[300px] p-4 border border-dark-4 bg-dark-3 text-light-1 rounded-md"
                dangerouslySetInnerHTML={{ __html: previewContent }}
              />
              <div className="text-xs text-neutral-400 mt-2">
                Preview mode: formatting is rendered as it will appear,
                '#' at the beginning of a sentence will be ignored.
              </div>
            </div>
          ) : (
            <FormField
              control={form.control}
              name='thread'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                  <FormLabel className='text-base-semibold text-light-2'>
                    Content
                  </FormLabel>
                  <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                    <Textarea 
                      rows={15} 
                      {...field} 
                      ref={(e) => {
                        field.ref(e);
                        textAreaRef.current = e;
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type='submit' className='bg-primary-500'>
            Post Thread
          </Button>
        </form>
      </Form>

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
    </>
  );
}

export default PostThread;