"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { repostThread, unrepostThread, hasUserRepostedThread, getThreadRepostsCount } from "@/lib/actions/thread.actions";

interface RepostButtonProps {
  threadId: string;
  userId: string;
  authorId: string;
}

function RepostButton({ threadId, userId, authorId }: RepostButtonProps) {
  const [repostCount, setRepostCount] = useState(0);
  const [hasReposted, setHasReposted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Check if current user is the author
  const isAuthor = userId === authorId;

  useEffect(() => {
    const fetchRepostData = async () => {
      try {
        const [count, reposted] = await Promise.all([
          getThreadRepostsCount(threadId),
          hasUserRepostedThread(threadId, userId)
        ]);
        
        setRepostCount(count);
        setHasReposted(reposted);
      } catch (error) {
        console.error("Error fetching repost data:", error);
      }
    };

    fetchRepostData();
  }, [threadId, userId]);

  const handleClick = () => {
    if (isAuthor) {
      // For authors, trigger edit mode directly for THIS specific thread
      const editEvent = new CustomEvent("edit-thread", { 
        detail: { threadId } 
      });
      document.dispatchEvent(editEvent);
      console.log("Edit event dispatched for thread:", threadId);
    } else {
      // For non-authors, handle repost functionality
      handleRepost();
    }
  };

  const handleRepost = async () => {
    setIsLoading(true);
    try {
      if (hasReposted) {
        await unrepostThread(threadId, userId);
        setRepostCount(prev => Math.max(0, prev - 1));
        setHasReposted(false);
      } else {
        await repostThread(threadId, userId);
        setRepostCount(prev => prev + 1);
        setHasReposted(true);
      }
    } catch (error) {
      console.error("Error toggling repost:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button 
        onClick={handleClick}
        disabled={isLoading}
        className="cursor-pointer focus:outline-none"
        aria-label={isAuthor ? "Edit thread" : "Repost thread"}
      >
        <Image
          src={hasReposted && !isAuthor ? '/assets/repost.svg' : '/assets/repost.svg'}
          alt={isAuthor ? "edit" : "repost"}
          width={24}
          height={24}
          className="object-contain"
        />
      </button>
      {repostCount > 0 && (
        <span className="text-subtle-medium text-gray-1">{repostCount}</span>
      )}
    </div>
  );
}

export default RepostButton;