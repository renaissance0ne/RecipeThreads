"use client"
import { useState } from "react";
import Image from "next/image";
import { likeThread, unlikeThread } from "@/lib/actions/thread.actions";

interface LikeButtonProps {
  threadId: string;
  userId: string;
  initialLikes: number;
  initialLiked: boolean;
}

function LikeButton({ threadId, userId, initialLikes = 0, initialLiked = false }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [isLoading, setIsLoading] = useState(false);

  const handleLikeClick = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Optimistically update the UI
      if (isLiked) {
        setLikesCount((prev) => Math.max(0, prev - 1));
        setIsLiked(false);
        await unlikeThread(threadId, userId);
      } else {
        setLikesCount((prev) => prev + 1);
        setIsLiked(true);
        await likeThread(threadId, userId);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      // Revert UI state if there's an error
      setIsLiked(initialLiked);
      setLikesCount(initialLikes);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button 
        onClick={handleLikeClick}
        disabled={isLoading}
        className="cursor-pointer focus:outline-none disabled:opacity-50"
        aria-label={isLiked ? "Unlike" : "Like"}
      >
        <Image
          src={isLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
          alt="like"
          width={24}
          height={24}
          className="object-contain transition-all duration-200"
        />
      </button>
      {likesCount > 0 && (
        <span className="text-subtle-medium text-gray-1">
          {likesCount}
        </span>
      )}
    </div>
  );
}

export default LikeButton;