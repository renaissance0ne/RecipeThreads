import React, { useRef } from 'react';
import GradientText from '@/components/effects/GradientText';
import VariableProximity from '@/components/effects/VariableProximity';
import CircularGallery from '@/components/effects/CircularGallery';

export default function Explore() {
    const containerRef = useRef<HTMLDivElement>(null!);

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
    <section id="about" className="py-20 bg-dark-2 z-10">
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="mb relative bg-dark-2">
          <div className="flex items-center">
            <GradientText
              colors={["#6366f1", "#d946ef", "#6366f1", "#d946ef", "#6366f1"]}
              animationSpeed={0}
              fontSize="clamp(1.5rem, 4vw, 2.5rem)"
              className="block font-['Roboto_Flex'] cursor-default select"
            >
              <VariableProximity
                label="Explore"
                fromFontVariationSettings="'wght' 300, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 150"
                containerRef={containerRef}
                radius={150}
                falloff="exponential"
                className="block font-['Roboto_Flex'] cursor-default select-none"
              />
            </GradientText>
          </div>
          <div className="absolute left-0 w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-2 rounded-full"></div>
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