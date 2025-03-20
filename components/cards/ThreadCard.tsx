import Image from "next/image";
import Link from "next/link";

import { formatDateString } from "@/lib/utils";
import DeleteThread from "../forms/DeleteThread";
import LikeButton from "../shared/LikeButton";
import RepostButton from "../shared/RepostButton";
import ClientThreadContent from "@/components/forms/ClientThreadContent";

interface Props {
  id: any; // Changed from string to any to handle MongoDB ObjectId
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
  likes?: string[];
}

function ThreadCard({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
  likes = [],
}: Props) {
  // Convert MongoDB ObjectId to string
  const threadId = id.toString();
  
  // Calculate if user has liked this thread
  const hasUserLiked = likes.includes(currentUserId);
  const likesCount = likes.length;

  // Process markdown-like content on the server
  const processContent = () => {
    let processedContent = content;
    
    // Replace headings (h1 to h6)
    processedContent = processedContent.replace(/^###### (.*?)$/gm, '<h6>$1</h6>');
    processedContent = processedContent.replace(/^##### (.*?)$/gm, '<h5>$1</h5>');
    processedContent = processedContent.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');
    processedContent = processedContent.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    processedContent = processedContent.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    processedContent = processedContent.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    
    // Replace underscores with underline tags
    // Match text between underscores, but not if preceded by backslash
    processedContent = processedContent.replace(
      /(?<![\\])_(.+?)(?<![\\])_/g, 
      '<span style="text-decoration: underline;">$1</span>'
    );
    
    // Replace **text** with bold tags
    processedContent = processedContent.replace(
      /(?<![\\])\*\*(.+?)(?<![\\])\*\*/g,
      '<strong>$1</strong>'
    );
    
    // Replace *text* with italic tags
    processedContent = processedContent.replace(
      /(?<![\\])\*(.+?)(?<![\\])\*/g,
      '<em>$1</em>'
    );
    
    // Replace new lines with <br> tags
    processedContent = processedContent.replace(/\n/g, '<br>');
    
    return processedContent;
  };

  const processedContent = processContent();

  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"
      }`}
    >
      <div className='flex items-start justify-between'>
        <div className='flex w-full flex-1 flex-row gap-4'>
          <div className='flex flex-col items-center'>
            <Link href={`/profile/${author.id}`} className='relative h-11 w-11'>
              <Image
                src={author.image}
                alt='Profile image'
                fill
                className='cursor-pointer rounded-full'
              />
            </Link>

            <div className='thread-card_bar' />
          </div>

          <div className='flex w-full flex-col'>
            <Link href={`/profile/${author.id}`} className='w-fit'>
              <h4 className='cursor-pointer text-base-semibold text-light-1'>
                {author.name}
              </h4>
            </Link>

            <ClientThreadContent
              threadId={threadId}
              initialContent={content}
              processedContent={processedContent}
              currentUserId={currentUserId}
              authorId={author.id}
            />

            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <div className='flex gap-3.5'>
                <LikeButton 
                  threadId={threadId}
                  userId={currentUserId}
                  initialLikes={likesCount}
                  initialLiked={hasUserLiked}
                />

                <Link href={`/thread/${threadId}`}>
                  <Image
                    src='/assets/reply.svg'
                    alt='reply'
                    width={24}
                    height={24}
                    className='cursor-pointer object-contain'
                  />
                </Link>
                
                <RepostButton 
                  threadId={threadId}
                  userId={currentUserId}
                  authorId={author.id}
                />
                
                <Image
                  src='/assets/share.svg'
                  alt='share'
                  width={24}
                  height={24}
                  className='cursor-pointer object-contain'
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/thread/${threadId}`}>
                  <p className='mt-1 text-subtle-medium text-gray-1'>
                    {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

        <DeleteThread
          threadId={threadId}
          currentUserId={currentUserId}
          authorId={author.id}
          parentId={parentId}
          isComment={isComment}
        />
      </div>

      {!isComment && comments.length > 0 && (
        <div className='ml-1 mt-3 flex items-center gap-2'>
          {comments.slice(0, 2).map((comment, index) => (
            <Image
              key={index}
              src={comment.author.image}
              alt={`user_${index}`}
              width={24}
              height={24}
              className={`${index !== 0 && "-ml-5"} rounded-full object-cover`}
            />
          ))}

          <Link href={`/thread/${threadId}`}>
            <p className='mt-1 text-subtle-medium text-gray-1'>
              {comments.length} repl{comments.length > 1 ? "ies" : "y"}
            </p>
          </Link>
        </div>
      )}

      {!isComment && community && (
        <Link
          href={`/communities/${community.id}`}
          className='mt-5 flex items-center'
        >
          <p className='text-subtle-medium text-gray-1'>
            {formatDateString(createdAt)}
            {community && ` - ${community.name} Community`}
          </p>

          <Image
            src={community.image}
            alt={community.name}
            width={14}
            height={14}
            className='ml-1 rounded-full object-cover'
          />
        </Link>
      )}
    </article>
  );
}

export default ThreadCard;