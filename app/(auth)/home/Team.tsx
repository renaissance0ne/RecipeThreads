import React from 'react';
import GradientText from '@/components/effects/GradientText';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  skills: string[];
  socials: {
    facebook?: string;
    instagram?: string;
    dribbble?: string;
    behance?: string;
  };
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "ZOE SULLIVAN",
      role: "PRODUCT MANAGER",
      image: "/assets/team/member1.jpg",
      skills: ["LOGO DESIGN", "BRAND MESSAGING", "VISUAL IDENTITY"],
      socials: {
        facebook: "#",
        instagram: "#",
        dribbble: "#"
      }
    },
    {
      name: "DANIEL TRADAMS",
      role: "PRODUCT MANAGER",
      image: "/assets/team/member2.jpg",
      skills: ["LOGO DESIGN", "BRAND MESSAGING", "VISUAL IDENTITY"],
      socials: {
        facebook: "#",
        instagram: "#",
        dribbble: "#"
      }
    },
    {
      name: "GRACE MORGAN",
      role: "UI DESIGNER",
      image: "/assets/team/member3.jpg",
      skills: ["LOGO DESIGN", "BRAND MESSAGING", "VISUAL IDENTITY"],
      socials: {
        facebook: "#",
        instagram: "#",
        dribbble: "#",
        behance: "#"
      }
    },
    {
      name: "RICHARD TROMASN",
      role: "DEVELOPER",
      image: "/assets/team/member4.jpg",
      skills: ["LOGO DESIGN", "BRAND MESSAGING", "VISUAL IDENTITY"],
      socials: {
        facebook: "#",
        instagram: "#",
        dribbble: "#"
      }
    }
  ];

  return (
    <section className="relative py-24 bg-dark-1 overflow-hidden">
      {/* Massive MEMBERS title */}
      <div className="mb-24">
        <div className="w-full px-4">
          <GradientText
            colors={["#6366f1", "#d946ef", "#6366f1"]}
            animationSpeed={25}
            fontSize="10vw"
            className="font-extrabold tracking-wide text-right max-w-full leading-none"
          >
            MEMBERS
          </GradientText>
        </div>
      </div>

      {/* Team members grid with staggered layout */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* First row */}
          <div className="flex flex-col">
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src={teamMembers[0].image} 
                alt={teamMembers[0].name}
                className="w-full h-auto bg-orange-500 object-cover aspect-[3/4]"
              />
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="ml-4">
              <div className="uppercase text-gray-500 text-sm mb-1">{teamMembers[0].role}</div>
              <h3 className="text-4xl font-bold mb-4">{teamMembers[0].name}</h3>
              <ul className="mb-4">
                {teamMembers[0].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[0].socials.facebook} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
                  </svg>
                </a>
                <a href={teamMembers[0].socials.instagram} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" />
                  </svg>
                </a>
                <a href={teamMembers[0].socials.dribbble} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Second row - offset down */}
          <div className="flex flex-col mt-24">
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src={teamMembers[1].image} 
                alt={teamMembers[1].name}
                className="w-full h-auto bg-yellow-500 object-cover aspect-[3/4]"
              />
            </div>
            <div className="ml-4">
              <div className="uppercase text-gray-500 text-sm mb-1">{teamMembers[1].role}</div>
              <h3 className="text-4xl font-bold mb-4">{teamMembers[1].name}</h3>
              <ul className="mb-4">
                {teamMembers[1].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[1].socials.facebook} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
                  </svg>
                </a>
                <a href={teamMembers[1].socials.instagram} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" />
                  </svg>
                </a>
                <a href={teamMembers[1].socials.dribbble} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="flex flex-col">
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src={teamMembers[2].image} 
                alt={teamMembers[2].name}
                className="w-full h-auto bg-red-500 object-cover aspect-[3/4]"
              />
            </div>
            <div className="ml-4">
              <div className="uppercase text-gray-500 text-sm mb-1">{teamMembers[2].role}</div>
              <h3 className="text-4xl font-bold mb-4">{teamMembers[2].name}</h3>
              <ul className="mb-4">
                {teamMembers[2].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[2].socials.facebook} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
                  </svg>
                </a>
                <a href={teamMembers[2].socials.instagram} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" />
                  </svg>
                </a>
                <a href={teamMembers[2].socials.dribbble} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                  </svg>
                </a>
                <a href={teamMembers[2].socials.behance} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7h-7V2H2v20h13v-5h7V7zm-1 5h-6v-3h6v3zM9 7h5v1H9V7zm0 3h5v1H9v-1zm0 3h3v1H9v-1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Fourth row - offset down */}
          <div className="flex flex-col mt-24">
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src={teamMembers[3].image} 
                alt={teamMembers[3].name}
                className="w-full h-auto bg-gray-700 object-cover aspect-[3/4]"
              />
            </div>
            <div className="ml-4">
              <div className="uppercase text-gray-500 text-sm mb-1">{teamMembers[3].role}</div>
              <h3 className="text-4xl font-bold mb-4">{teamMembers[3].name}</h3>
              <ul className="mb-4">
                {teamMembers[3].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[3].socials.facebook} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
                  </svg>
                </a>
                <a href={teamMembers[3].socials.instagram} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" />
                  </svg>
                </a>
                <a href={teamMembers[3].socials.dribbble} className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}