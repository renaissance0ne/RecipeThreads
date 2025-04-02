import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ChefHat, MessageCircle, Utensils } from "lucide-react";
import ambrosia from "@/public/assets/ambrosia.png";
import TextPressure from "@/components/effects/TextPressure";

const AboutUs: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const parallaxItem1 = useRef<HTMLDivElement>(null);
  const parallaxItem2 = useRef<HTMLDivElement>(null);
  const parallaxItem3 = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    window.dispatchEvent(new Event('resize'));
  }, []);

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
    <section id="about" className="py-12 bg-dark-2 relative z-10">
      <div ref={heroRef} className="relative min-h-screen pt-8 md:pt-16 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-full h-16 md:h-20 lg:h-24 text-left">
            {mounted && (
              <div className="max-w-3xl">
                <TextPressure
                  text="About Us"
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

          <div className="py-4 md:py-6 lg:py-8"></div>

          <div className="container mx-auto px-6 lg:px-12">
            {/* Grid layout with content on left, parallax on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <div className="order-1 lg:order-2 flex justify-center">
                <div 
                  ref={cardRef} 
                  className="relative w-full max-w-md transition-transform duration-100 will-change-transform"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="aspect-[0.9] overflow-hidden relative">
                    <Image 
                      src={ambrosia} 
                      alt="Ambrosia" 
                      layout="fill"
                      objectFit="contain"
                      className="absolute inset-0"
                    />
                  </div>
                  
                  <div 
                    ref={parallaxItem1}
                    className="absolute -top-4 -right-4 glass-panel p-4 rounded-xl shadow-medium bg-primary-500/20 transition-transform duration-100 backdrop-blur-sm"
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;