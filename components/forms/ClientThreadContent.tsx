"use client";

import { useState, useEffect } from "react";
import EditThread from "../forms/EditThread";

interface ClientThreadContentProps {
  threadId: string;
  initialContent: string;
  processedContent: string;
  currentUserId: string;
  authorId: string;
}

function ClientThreadContent({
  threadId,
  initialContent,
  processedContent,
  currentUserId,
  authorId
}: ClientThreadContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [threadContent, setThreadContent] = useState(initialContent);

  // Only allow editing if current user is the author
  const canEdit = currentUserId === authorId;
  
  useEffect(() => {
    const handleEditEvent = (e: CustomEvent) => {
      if (e.detail.threadId === threadId && canEdit) {
        console.log("Edit event received for thread:", threadId);
        setIsEditing(true);
      }
    };

    // Cast to any to satisfy TypeScript
    document.addEventListener("edit-thread", handleEditEvent as any);

    return () => {
      document.removeEventListener("edit-thread", handleEditEvent as any);
    };
  }, [threadId, canEdit]);

  return (
    <>
      {isEditing ? (
        <EditThread 
          threadId={threadId}
          currentContent={threadContent}
          onCancel={() => setIsEditing(false)}
          onSuccess={() => setIsEditing(false)}
        />
      ) : (
        <div 
          className='mt-2 text-small-regular text-light-2'
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      )}
    </>
  );
}

export default ClientThreadContent;