'use client'

import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';
import AboutUs from './aboutUs';
import VariableProximity from '@/components/effects/VariableProximity';
import GradientText from '@/components/effects/GradientText';
import Hero from './Hero';
import Ribbons from '@/components/effects/Ribbons';
import CircularGallery from '@/components/effects/CircularGallery';
import RiveLoading from "@/components/shared/RiveLoading";

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-dark-1 z-50">
    <div className="relative w-16 h-16">
      return <RiveLoading />;
    </div>
  </div>
);

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);
  const heroRef = useRef<HTMLDivElement>(null!);

  // Define the items array with the correct format for your CircularGallery component
  const galleryItems = [
    { image: '/assets/book.png', text: 'Recipes' },
    { image: '/assets/chat.png', text: 'Real-time Discussion' },
    { image: '/assets/like.png', text: 'Like & Recommend' },
    { image: '/assets/groups.png', text: 'Communities' },
    { image: '/assets/share.png', text: 'Share' },
    { image: '/assets/gemini.png', text: 'Rephrase' }
  ];

  useEffect(() => {
    // Load fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Simulate loading of resources
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Force a layout recalculation after components are mounted
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }, 1500);

    return () => {
      document.head.removeChild(link);
      clearTimeout(timer);
    };
  }, []);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = galleryItems.map((item) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = item.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setResourcesLoaded(true);
      } catch (error) {
        console.error('Failed to load some images', error);
        // Still mark resources as loaded to continue
        setResourcesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  // Effect to handle window resize
  useEffect(() => {
    // Function to handle resize
    const handleResize = () => {
      // This will trigger any components that depend on window dimensions
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Trigger initial resize after component mount
    if (!loading && resourcesLoaded) {
      window.dispatchEvent(new Event('resize'));
    }

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [loading, resourcesLoaded]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen w-full" ref={containerRef}>
      <div className="fixed inset-0" style={{ zIndex: 1 }}>
        <Ribbons
          colors={['#6366f1', '#8b5cf6', '#d946ef']}
          baseThickness={15}
          enableFade={true}
          pointCount={30}
          speedMultiplier={0.4}
          maxAge={300}
        />
      </div>

      <Navbar />

      <div id="hero">
        <Hero heroRef={heroRef} containerRef={containerRef} />
      </div>

      <div id="about">
        <AboutUs />
      </div>
      
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
              {/* Short, centered underline */}
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
      
    </div>
  );
}