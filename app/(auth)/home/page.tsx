'use client'

import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutUs from './aboutUs';
import Explore from './Explore';
import ChooseUs from './ChooseUs'
import Team from './Team';
import Footer from './Footer';

import Ribbons from '@/components/effects/Ribbons';
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

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const timer = setTimeout(() => {
      setLoading(false);
      
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }, 1500);

    return () => {
      document.head.removeChild(link);
      clearTimeout(timer);
    };
  }, []);


  useEffect(() => {
    const handleResize = () => {
    };

    window.addEventListener('resize', handleResize);
    
    if (!loading && resourcesLoaded) {
      window.dispatchEvent(new Event('resize'));
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [loading, resourcesLoaded]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen w-full" ref={containerRef}>
      {/* <div className="fixed inset-0" style={{ zIndex: 1 }}>
        <Ribbons
          colors={['#6366f1', '#8b5cf6', '#d946ef']}
          baseThickness={15}
          enableFade={true}
          pointCount={30}
          speedMultiplier={0.4}
          maxAge={300}
        />
      </div> */}

      <Navbar />

      <div id="hero">
        <Hero heroRef={heroRef} containerRef={containerRef} />
      </div>

      <div id="about">
        <AboutUs />
      </div>
      
      <div id="explore">
        <Explore />
      </div>

      <div id="ChooseUs">
        <ChooseUs />
      </div>

      <div id="Team">
        <Team />
      </div>
      
      <Footer />
    </div>
  );
}