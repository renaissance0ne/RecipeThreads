'use client'

import React from 'react';
import GradientText from '@/components/effects/GradientText';

const AboutUs: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-black py-12 sm:py-16">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="lg:w-1/2 space-y-4 sm:space-y-6 max-w-3xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              <GradientText
                colors={["#ffffff", "#f0f0f0", "#ffffff"]}
                animationSpeed={3}
                fontSize="inherit"
                className="font-['Roboto_Flex'] cursor-default"
              >
                About Ambrosia
              </GradientText>
            </h2>
            
            <p className="text-white/90 text-base sm:text-lg">
              At Ambrosia, we believe that cooking is more than just preparing meals—it's about creating memories, sharing traditions, and expressing creativity through food.
            </p>
            
            <p className="text-white/90 text-base sm:text-lg">
              Founded in 2023, our community brings together cooking enthusiasts of all levels—from beginners just learning to boil water to seasoned home chefs experimenting with molecular gastronomy.
            </p>
            
            <p className="text-white/90 text-base sm:text-lg">
              Our mission is to make home cooking accessible, enjoyable, and inspiring for everyone. Through our platform, you can discover recipes, learn techniques, and connect with fellow food lovers from around the world.
            </p>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto lg:mx-0">
              <img 
                src="/api/placeholder/600/400" 
                alt="Ambrosia community cooking together" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-700/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;