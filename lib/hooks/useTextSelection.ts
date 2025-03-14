import { useState, useEffect, useCallback } from 'react';

interface TextSelectionPosition {
  x: number;
  y: number;
}

export function useTextSelection() {
  const [selectedText, setSelectedText] = useState<string>('');
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [selectionPosition, setSelectionPosition] = useState<TextSelectionPosition>({ x: 0, y: 0 });

  const handleSelectionChange = useCallback(() => {
    const selection = window.getSelection();
    
    if (selection && selection.toString().trim() !== '') {
      setSelectedText(selection.toString());
      setIsSelecting(true);
      
      // Get the bounding rectangle of the selected text
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      // Position the dock at the top of the selection
      setSelectionPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10 + window.scrollY
      });
    } else {
      setIsSelecting(false);
      setSelectedText('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelectionChange);
    document.addEventListener('mouseup', handleSelectionChange);
    
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('mouseup', handleSelectionChange);
    };
  }, [handleSelectionChange]);

  return {
    selectedText,
    isSelecting,
    selectionPosition
  };
}