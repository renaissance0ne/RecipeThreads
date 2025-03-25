'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  WhatsappShareButton, 
  FacebookShareButton, 
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  EmailShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  EmailIcon
} from 'next-share';

interface ShareButtonProps {
  threadId: string;
}

const ShareButton = ({ threadId }: ShareButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const [threadUrl, setThreadUrl] = useState('');
  
  useEffect(() => {
    // Only access window after component has mounted (client-side)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
    setThreadUrl(`${baseUrl}/thread/${threadId}`);
  }, [threadId]);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(threadUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="relative">
      <Image
        src="/assets/share.svg"
        alt="share"
        width={24}
        height={24}
        className="cursor-pointer object-contain"
        onClick={() => setShowModal(true)}
      />
      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-dark-3 rounded-xl p-6 w-96 max-w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-light-1 text-lg font-bold">Share Thread</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-1 hover:text-light-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="border border-dark-4 rounded-lg p-3 mb-4 flex justify-between items-center">
              <p className="text-light-2 text-sm truncate">{threadUrl}</p>
              <button 
                onClick={handleCopyLink}
                className="bg-primary-500 hover:bg-primary-600 text-white py-1 px-3 rounded-md text-xs"
              >
                Copy
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <WhatsappShareButton url={threadUrl}>
                  <WhatsappIcon size={40} round />
                  <span className="text-light-2 text-xs mt-1">WhatsApp</span>
                </WhatsappShareButton>
              </div>
              
              <div className="flex flex-col items-center">
                <FacebookShareButton url={threadUrl}>
                  <FacebookIcon size={40} round />
                  <span className="text-light-2 text-xs mt-1">Facebook</span>
                </FacebookShareButton>
              </div>
              
              <div className="flex flex-col items-center">
                <TwitterShareButton url={threadUrl}>
                  <TwitterIcon size={40} round />
                  <span className="text-light-2 text-xs mt-1">Twitter</span>
                </TwitterShareButton>
              </div>
              
              <div className="flex flex-col items-center">
                <LinkedinShareButton url={threadUrl}>
                  <LinkedinIcon size={40} round />
                  <span className="text-light-2 text-xs mt-1">LinkedIn</span>
                </LinkedinShareButton>
              </div>
              
              <div className="flex flex-col items-center">
                <TelegramShareButton url={threadUrl}>
                  <TelegramIcon size={40} round />
                  <span className="text-light-2 text-xs mt-1">Telegram</span>
                </TelegramShareButton>
              </div>
              
              <div className="flex flex-col items-center">
                <EmailShareButton url={threadUrl} subject="Check out this thread!">
                  <EmailIcon size={40} round />
                  <span className="text-light-2 text-xs mt-1">Email</span>
                </EmailShareButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;