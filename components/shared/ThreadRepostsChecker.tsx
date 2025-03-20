"use client";

import { useEffect } from "react";
import { hasUserRepostedThread, getThreadRepostsCount } from "@/lib/actions/thread.actions";

interface ThreadRepostsCheckerProps {
  threadId: string;
  userId: string;
  onDataFetched: (repostsCount: number, isReposted: boolean) => void;
}

function ThreadRepostsChecker({ threadId, userId, onDataFetched }: ThreadRepostsCheckerProps) {
  useEffect(() => {
    const fetchRepostsData = async () => {
      try {
        const [repostsCount, isReposted] = await Promise.all([
          getThreadRepostsCount(threadId),
          hasUserRepostedThread(threadId, userId)
        ]);
        
        onDataFetched(repostsCount, isReposted);
      } catch (error) {
        console.error("Error fetching reposts data:", error);
        onDataFetched(0, false);
      }
    };

    fetchRepostsData();
  }, [threadId, userId, onDataFetched]);

  return null; // This component doesn't render anything
}

export default ThreadRepostsChecker;