"use client";

import { useEffect, useState } from "react";
import { hasUserLikedThread, getThreadLikesCount } from "@/lib/actions/thread.actions";

interface ThreadLikesCheckerProps {
  threadId: string;
  userId: string;
  onDataFetched: (likesCount: number, isLiked: boolean) => void;
}

function ThreadLikesChecker({ threadId, userId, onDataFetched }: ThreadLikesCheckerProps) {
  useEffect(() => {
    const fetchLikesData = async () => {
      try {
        const [likesCount, isLiked] = await Promise.all([
          getThreadLikesCount(threadId),
          hasUserLikedThread(threadId, userId)
        ]);
        
        onDataFetched(likesCount, isLiked);
      } catch (error) {
        console.error("Error fetching likes data:", error);
        onDataFetched(0, false);
      }
    };

    fetchLikesData();
  }, [threadId, userId, onDataFetched]);

  return null; // This component doesn't render anything
}

export default ThreadLikesChecker;