'use client'

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import AboutUs from './aboutUs';
import TextPressure from '@/components/effects/TextPressure';
import VariableProximity from '@/components/effects/VariableProximity';
import Ribbons from '@/components/effects/Ribbons';
import GradientText from '@/components/effects/GradientText';
import InfiniteMenu from '@/components/effects/InfiniteMenu';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      image: '/assets/ifmenu-rephrase.jpeg',
      link: 'https://google.com/',
      title: 'Rephrase',
      description: 'Users can rephrase their content'
    },
    {
      image: '/assets/ifmenu-community.jpg',
      link: 'https://google.com/',
      title: 'Communities',
      description: 'Users can join communities and share recipes and get insights'
    },
    {
      image: '/assets/ifmenu-reply.png',
      link: 'https://google.com/',
      title: 'Replies',
      description: 'get instant replies for your questions'
    },
  ];

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add additional font for Why Choose Us section
    const playfairLink = document.createElement('link');
    playfairLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap';
    playfairLink.rel = 'stylesheet';
    document.head.appendChild(playfairLink);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(playfairLink);
    };
  }, []);

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

      <div className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight'>
        <Navbar />
      </div>

      {/* Hero Section with ID for scrolling */}
      <div id="home" className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/assets/hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

        <div ref={heroRef} className="relative min-h-screen pt-16 md:pt-24 lg:pt-32">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-5xl">
              <div className="py-8 md:py-12 lg:py-16 space-y-8 md:space-y-12">
                <div className="w-full h-24 md:h-32 lg:h-40">
                  <TextPressure
                    text="AMBROSIA"
                    fontFamily="Inter"
                    textColor="transparent"
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl cursor-default"
                    minFontSize={20}
                    scale={true}
                    width={true}
                  />
                </div>

                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  <GradientText
                    colors={["#6366f1", "#d946ef", "#6366f1", "#d946ef", "#6366f1"]}
                    animationSpeed={5}
                    fontSize="clamp(1.5rem, 4vw, 2.5rem)"
                    className="italic block font-['Roboto_Flex'] cursor-default select-none"
                  >
                    <VariableProximity
                      label="Home Cooking, "
                      fromFontVariationSettings="'wght' 300, 'wdth' 100"
                      toFontVariationSettings="'wght' 900, 'wdth' 150"
                      containerRef={containerRef}
                      radius={150}
                      falloff="exponential"
                      className="italic block font-['Roboto_Flex'] cursor-default select-none"
                    />
                  </GradientText>
                  <div className="relative cursor-default">
                    <GradientText
                      colors={["#6366f1", "#d946ef", "#6366f1", "#d946ef", "#6366f1"]}
                      animationSpeed={5}
                      fontSize="clamp(1.5rem, 4vw, 2.5rem)"
                      className="italic block font-['Roboto_Flex'] cursor-default select-none"
                    >
                      <VariableProximity
                        label="Reimagined"
                        fromFontVariationSettings="'wght' 300, 'wdth' 100"
                        toFontVariationSettings="'wght' 900, 'wdth' 150"
                        containerRef={containerRef}
                        radius={150}
                        falloff="exponential"
                        className="italic block font-['Roboto_Flex'] cursor-default select-none"
                      />
                    </GradientText>
                  </div>
                </div>

                <div className="relative">
                  <GradientText
                    colors={["#6366f1", "#d946ef", "#6366f1", "#d946ef", "#6366f1"]}
                    animationSpeed={5}
                    fontSize="clamp(1rem, 2vw, 1.25rem)"
                    className='font-semibold text-white leading-tight md:leading-tight cursor-default relative z-10'
                  >
                    Join our community and rediscover the joy of home cooking. Share recipes, ask questions, and connect with cooks of all levels as you explore the delicious world of homemade food.
                  </GradientText>
                </div>

                <div>
                  <Link
                    href="/sign-up"
                    className="group inline-block px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 cursor-pointer select-none relative z-20"
                  >
                    <span className="relative z-10">Join Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section with ID for scrolling */}
      <div id="about">
        <AboutUs />
      </div>

      {/* Explore Section with ID for scrolling */}
      <div id="explore" style={{ height: '600px', position: 'relative' }} className='relative z-10'>
        <InfiniteMenu items={items} />
      </div>

      {/* Why Choose Us Section with ID for scrolling */}
      <div id="difference" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/assets/wcubackground.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.85,
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 font-['Playfair_Display']"
                style={{ fontSize: "clamp(3rem, 5vw, 8rem)" }}
              >
                Why Choose Us
              </h2>
              <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="text-white space-y-6 backdrop-blur-sm bg-black/30 p-6 md:p-8 rounded-xl shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed font-['Playfair_Display'] font-light">
                A significant portion of the global population lacks basic cooking skills. For example, in several countries, many people do not cook regularly at home and depend on convenience foods.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-['Playfair_Display'] font-light">
                Our website is a unique cooking discussion platform where users can ask questions about recipes and receive instant answers from fellow cooking enthusiasts. This interactive community encourages young people to engage in home cooking and move away from processed foods.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-['Playfair_Display'] font-light">
                While many websites offer similar services, they often require payment or lack the immediate interaction that our platform guarantees. Unlike other platforms that share recipes through videos and posts but fail to respond to users' comments, our website ensures that users receive instant replies to their questions. We offer all these services for free, making it accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section with ID for scrolling - Add placeholder if no team section exists yet */}
      <div id="team" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/80" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 font-['Playfair_Display']"
              style={{ fontSize: "clamp(3rem, 5vw, 8rem)" }}
            >
              Our Team
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>

            <div className="text-white space-y-6 backdrop-blur-sm bg-black/30 p-6 md:p-8 rounded-xl shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed font-['Playfair_Display'] font-light">
                Meet the passionate team behind Ambrosia. Our diverse group of cooking enthusiasts, food scientists, and tech experts work together to create the best platform for home cooking enthusiasts around the world.
              </p>
              {/* You can add team member cards here when available */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}