import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ChefHat, MessageCircle, Utensils } from "lucide-react";
import VariableProximity from '@/components/effects/VariableProximity';
import GradientText from '@/components/effects/GradientText';
import ambrosia from "@/public/assets/ambrosia.png";

const AboutUs: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const parallaxItem1 = useRef<HTMLDivElement>(null);
  const parallaxItem2 = useRef<HTMLDivElement>(null);
  const parallaxItem3 = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const items = [parallaxItem1.current, parallaxItem2.current, parallaxItem3.current];
    
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      items.forEach((item, index) => {
        if (item) {
          const speed = 0.5 + (index * 0.1);
          item.style.transform = `translate(${(centerX - x) * speed * 0.1}px, ${(centerY - y) * speed * 0.1}px)`;
        }
      });
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      card.style.transition = 'transform 0.5s ease';
      
      items.forEach(item => {
        if (item) {
          item.style.transform = 'translate(0, 0)';
        }
      });
    };
    
    const handleMouseEnter = () => {
      card.style.transition = 'transform 0.1s ease';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-dark-2 z-10">
      <div className="container mx-auto px-6 lg:px-12 z-10">
        {/* Heading with short centered underline */}
        <div className="mb relative">
          <div className="flex items-center">
            <GradientText
              colors={["#6366f1", "#d946ef", "#6366f1", "#d946ef", "#6366f1"]}
              animationSpeed={0}
              fontSize="clamp(1.5rem, 4vw, 2.5rem)"
              className="block font-['Roboto_Flex'] cursor-default select"
            >
              <VariableProximity
                label="About Us"
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

        {/* Grid layout with content on left, parallax on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <Reveal delay={100}>
              <p className="text-body-medium text-light-2 mb-6">
                Ambrosia is a social platform dedicated to bringing together passionate home cooks, 
                professional chefs, and food enthusiasts in a space where culinary knowledge flows freely.
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-body-medium text-light-2 mb-8">
                Founded with a mission to combat the global reliance on processed foods, 
                we aim to empower individuals with the knowledge, skills, and community support 
                needed to embrace home cooking and healthier eating habits. With over 50% of populations 
                in many countries consuming processed foods regularly, we're dedicated to reversing this trend 
                through accessible cooking education and community engagement.
              </p>
            </Reveal>
          </div>

          {/* Parallax Card - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center perspective-container relative z-10">
            <div 
              ref={cardRef} 
              className="relative w-full max-w-md transition-transform duration-100 will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="aspect-[0.9] overflow-hidden transform-style-preserve-3d relative">
                <Image 
                  src={ambrosia} 
                  alt="Ambrosia" 
                  layout="fill"
                  objectFit="contain"
                  className="absolute inset-0 z-10"
                />
              </div>
              
              <div 
                ref={parallaxItem1}
                className="absolute -top-4 -right-4 glass-panel p-4 rounded-xl shadow-medium bg-primary-500/20 transition-transform duration-100 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d', zIndex: 10 }}
              >
                <div className="flex items-center gap-3">
                  <ChefHat className="text-primary-500" size={24} />
                  <div>
                    <p className="text-base-semibold text-light-1">50+</p>
                    <p className="text-small-medium text-light-3">Active Users</p>
                  </div>
                </div>
              </div>
              
              <div 
                ref={parallaxItem2}
                className="absolute -bottom-5 -left-5 glass-panel p-4 rounded-xl shadow-medium bg-primary-500/20 transition-transform duration-100 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d', zIndex: 20 }}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-primary-500" size={24} />
                  <div>
                    <p className="text-base-semibold text-light-1">Real-time</p>
                    <p className="text-small-medium text-light-3">Discussions</p>
                  </div>
                </div>
              </div>
              
              <div 
                ref={parallaxItem3}
                className="absolute top-1/2 -translate-y-1/2 -right-10 glass-panel p-4 rounded-xl shadow-medium bg-primary-500/20 transition-transform duration-100 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d', zIndex: 30 }}
              >
                <div className="flex items-center gap-3">
                  <Utensils className="text-primary-500" size={24} />
                  <div>
                    <p className="text-base-semibold text-light-1">Healthy</p>
                    <p className="text-small-medium text-light-3">Recipes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;