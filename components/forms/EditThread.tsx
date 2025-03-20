"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { updateThread } from "@/lib/actions/thread.actions";

interface EditThreadProps {
  threadId: string;
  currentContent: string;
  onCancel: () => void;
  onSuccess: () => void;
}

function EditThread({ threadId, currentContent, onCancel, onSuccess }: EditThreadProps) {
  const [content, setContent] = useState(currentContent);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      await updateThread({
        threadId,
        text: content,
        path: pathname,
      });
      
      onSuccess();
    } catch (error) {
      console.error("Error updating thread:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        placeholder="Edit your thread..."
        className="bg-dark-3 text-light-1 rounded-lg p-3 w-full focus:outline-none"
      />
      
      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-1 hover:text-light-2"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-light-1 px-4 py-1 rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}

export default EditThread;