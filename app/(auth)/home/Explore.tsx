import React, { useEffect, useRef, useState } from 'react';
import GradientText from '@/components/effects/GradientText';
import VariableProximity from '@/components/effects/VariableProximity';
import CircularGallery from '@/components/effects/CircularGallery';
import TextPressure from '@/components/effects/TextPressure';

export default function Explore() {
    const heroRef = useRef<HTMLDivElement>(null);
      const [mounted, setMounted] = useState(false);
      useEffect(() => {
        setMounted(true);
        window.dispatchEvent(new Event('resize'));
      }, []);

      const galleryItems = [
        { image: '/assets/book.png', text: 'Recipes' },
        { image: '/assets/chat.png', text: 'Real-time Discussion' },
        { image: '/assets/like.png', text: 'Like & Recommend' },
        { image: '/assets/groups.png', text: 'Communities' },
        { image: '/assets/share.png', text: 'Share' },
        { image: '/assets/gemini.png', text: 'Rephrase' }
      ];

  return (
    <div id="explore" className="relative z-10" style={{ height: '500px' }}>
    <section id="about" className="py-12 bg-dark-2 relative z-10" style={{ height: '300px' }}>
      <div ref={heroRef} className="relative min-h-screen pt-8 md:pt-16 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-full h-16 md:h-20 lg:h-24 text-left">
            {mounted && (
              <div className="max-w-3xl">
                <TextPressure
                  text="Explore"
                  fontFamily="Inter"
                  textColor="transparent"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-default"
                  minFontSize={10}
                  scale={true}
                  width={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    <CircularGallery 
      items={galleryItems} 
      bend={1} 
      textColor="#877EFF" 
      borderRadius={0.05} 
    />
  </div>
  );
}