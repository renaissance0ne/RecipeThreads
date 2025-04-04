import React from 'react';
import GradientText from '@/components/effects/GradientText';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  skills: string[];
  socials: {
    github?: string;
    instagram?: string;
    discord?: string;
  };
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "VALLABH DASARI",
      role: "FULL STACK DEVELOPER",
      image: "/assets/member1.png",
      skills: ["WEB DEVELOPMENT", "MACHINE LEARNING", "CLOUD ARCHITECT"],
      socials: {
        github: "https://github.com/renaissance0ne",
        instagram: "https://www.instagram.com/renaissance_0ne/profilecard/?igsh=YTcyZWg0ZW8xbHVs",
        discord: "https://discord.gg/XzhUWS5Q"
      }
    },
    {
      name: "SHASHANK MATAM",
      role: "DEV OPS ENGINEER",
      image: "/assets/member2.jpg",
      skills: ["LOGO DESIGN", "BRAND MESSAGING", "VISUAL IDENTITY"],
      socials: {
        github: "http://github.com/shashank39172",
        instagram: "https://www.instagram.com/shashank_39172?igsh=MW11c3FlbnA4d3doYQ==",
        discord: "https://discordapp.com/users/878471703196483594"
      }
    },
    {
      name: "LAASYA DASI",
      role: "UI DESIGNER",
      image: "/assets/member3.jpg",
      skills: ["VISUAL DESIGNER", "CONTENT STRATEGIST", "PERFORMANCE OPTIMISER"],
      socials: {
        github: "https://github.com/DasiLaasya",
        instagram: "https://www.instagram.com/dasilaasya?igsh=MW82aDhid3A0dHp1aw==",
        discord: "https://discordapp.com/users/1286695163728629772"
      }
    },
    {
      name: "ISHITHA RAI EAMANI",
      role: "RESEARCHER",
      image: "/assets/member4.jpg",
      skills: ["DOCUMENTATION", "PROJECT COORDINATION", "MARKET RESEARCH"],
      socials: {
        github: "https://github.com/Pum14",
        instagram: "https://www.linkedin.com/in/ishitha-rai-eamani-a2805b291/",
        discord: "https://discordapp.com/users/1274026314864787529"
      }
    },

    {
      name: "DHRUV PANAKANTI",
      role: "PROJECT ANALYST",
      image: "/assets/member5.jpg",
      skills: ["API DEVELOPMENT", "DATABASE ARCHITECTURE", "CLOUD DEPLOYMENT"],
      socials: {
        github: "https://github.com/DhruvPanakanti",
        instagram: "https://www.instagram.com/tensai_dhruv_10?igsh=MWthaTUzeGxieGFvZA%3D%3D&utm_source=qr",
        discord: "https://discordapp.com/users/1283434391644930069"
      }
    }
  ];

  return (
    <section className="relative py-24 bg-dark-2 overflow-hidden">
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
      <div className="container mx-auto px-6  flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* First row */}
          <div className="flex flex-row">
            <div className="relative h-full rounded-xl overflow-hidden">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="w-full h-96 bg-orange-500 object-cover rounded-xl aspect-[3/4]"
              />
            </div>
            <div className="ml-6 flex flex-col justify-center">
              <div className="uppercase text-gray-500 text-lg mb-1 font-semibold">{teamMembers[0].role}</div>
              <h3 className="text-4xl font-bold mb-4 text-primary-500" style={{fontSize: '28px', lineHeight: '1.2'}}>{teamMembers[0].name}</h3>
              <ul className="mb-4">
                {teamMembers[0].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[0].socials.github} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.781 9.492 20.015 9.492 19.185C7 19.673 6.35 18.577 6.15 17.992C6.037 17.689 5.55 16.783 5.125 16.546C4.775 16.357 4.275 15.868 5.112 15.857C5.9 15.845 6.462 16.611 6.65 16.926C7.55 18.437 8.988 18.031 9.54 17.769C9.63 17.137 9.89 16.709 10.175 16.464C7.95 16.219 5.62 15.342 5.62 11.599C5.62 10.471 6.01 9.539 6.67 8.812C6.57 8.563 6.22 7.56 6.77 6.174C6.77 6.174 7.612 5.913 9.502 7.217C10.312 6.99 11.175 6.877 12.038 6.877C12.9 6.877 13.763 6.99 14.573 7.217C16.462 5.902 17.303 6.174 17.303 6.174C17.853 7.56 17.503 8.563 17.403 8.812C18.063 9.539 18.453 10.459 18.453 11.599C18.453 15.353 16.112 16.219 13.887 16.464C14.243 16.769 14.55 17.363 14.55 18.289C14.55 19.606 14.542 20.681 14.542 21.017C14.542 21.278 14.703 21.591 15.203 21.489C19.135 20.167 22 16.405 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                </a>
                <a href={teamMembers[0].socials.instagram} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={teamMembers[0].socials.discord} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          {/* Second row */}
          <div className="flex flex-row mt-24">
  <div className="relative rounded-xl overflow-hidden">
    <img
      src={teamMembers[1].image}
      alt={teamMembers[1].name}
      className="w-auto h-96 bg-yellow-500 object-cover aspect-[3/4]"
    />
  </div>
            <div className="ml-6 flex flex-col justify-center">
              <div className="uppercase text-gray-500 text-lg mb-1 font-semibold">{teamMembers[1].role}</div>
              <h3 className="text-4xl font-bold mb-4 text-primary-500" style={{fontSize: '28px', lineHeight: '1.2'}}>{teamMembers[1].name}</h3>
              <ul className="mb-4">
                {teamMembers[1].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[1].socials.github} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.781 9.492 20.015 9.492 19.185C7 19.673 6.35 18.577 6.15 17.992C6.037 17.689 5.55 16.783 5.125 16.546C4.775 16.357 4.275 15.868 5.112 15.857C5.9 15.845 6.462 16.611 6.65 16.926C7.55 18.437 8.988 18.031 9.54 17.769C9.63 17.137 9.89 16.709 10.175 16.464C7.95 16.219 5.62 15.342 5.62 11.599C5.62 10.471 6.01 9.539 6.67 8.812C6.57 8.563 6.22 7.56 6.77 6.174C6.77 6.174 7.612 5.913 9.502 7.217C10.312 6.99 11.175 6.877 12.038 6.877C12.9 6.877 13.763 6.99 14.573 7.217C16.462 5.902 17.303 6.174 17.303 6.174C17.853 7.56 17.503 8.563 17.403 8.812C18.063 9.539 18.453 10.459 18.453 11.599C18.453 15.353 16.112 16.219 13.887 16.464C14.243 16.769 14.55 17.363 14.55 18.289C14.55 19.606 14.542 20.681 14.542 21.017C14.542 21.278 14.703 21.591 15.203 21.489C19.135 20.167 22 16.405 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                </a>
                <a href={teamMembers[1].socials.instagram} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={teamMembers[1].socials.discord} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="flex flex-row">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={teamMembers[2].image}
                alt={teamMembers[2].name}
                className="w-auto h-96 bg-red-500 object-cover rounded-xl aspect-[3/4]"
              />
            </div>
            <div className="ml-6 flex flex-col justify-center">
              <div className="uppercase text-gray-500 text-lg mb-1 font-semibold">{teamMembers[2].role}</div>
              <h3 className="text-4xl font-bold mb-4 text-primary-500" style={{fontSize: '28px', lineHeight: '1.2'}}>{teamMembers[2].name}</h3>
              <ul className="mb-4">
                {teamMembers[2].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[2].socials.github} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.781 9.492 20.015 9.492 19.185C7 19.673 6.35 18.577 6.15 17.992C6.037 17.689 5.55 16.783 5.125 16.546C4.775 16.357 4.275 15.868 5.112 15.857C5.9 15.845 6.462 16.611 6.65 16.926C7.55 18.437 8.988 18.031 9.54 17.769C9.63 17.137 9.89 16.709 10.175 16.464C7.95 16.219 5.62 15.342 5.62 11.599C5.62 10.471 6.01 9.539 6.67 8.812C6.57 8.563 6.22 7.56 6.77 6.174C6.77 6.174 7.612 5.913 9.502 7.217C10.312 6.99 11.175 6.877 12.038 6.877C12.9 6.877 13.763 6.99 14.573 7.217C16.462 5.902 17.303 6.174 17.303 6.174C17.853 7.56 17.503 8.563 17.403 8.812C18.063 9.539 18.453 10.459 18.453 11.599C18.453 15.353 16.112 16.219 13.887 16.464C14.243 16.769 14.55 17.363 14.55 18.289C14.55 19.606 14.542 20.681 14.542 21.017C14.542 21.278 14.703 21.591 15.203 21.489C19.135 20.167 22 16.405 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                </a>
                <a href={teamMembers[2].socials.instagram} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={teamMembers[2].socials.discord} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Fourth row */}
          <div className="flex flex-row mt-24">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={teamMembers[3].image}
                alt={teamMembers[3].name}
                className="w-auto h-96 bg-blue-500 object-cover aspect-[3/4]"
              />
              {/* <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button> */}
            </div>
            <div className="ml-6 flex flex-col justify-center">
              <div className="uppercase text-gray-500 text-lg mb-1 font-semibold">{teamMembers[3].role}</div>
              <h3 className="text-4xl font-bold mb-4 text-primary-500" style={{fontSize: '28px', lineHeight: '1.2'}}>{teamMembers[3].name}</h3>
              <ul className="mb-4">
                {teamMembers[3].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[3].socials.github} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.781 9.492 20.015 9.492 19.185C7 19.673 6.35 18.577 6.15 17.992C6.037 17.689 5.55 16.783 5.125 16.546C4.775 16.357 4.275 15.868 5.112 15.857C5.9 15.845 6.462 16.611 6.65 16.926C7.55 18.437 8.988 18.031 9.54 17.769C9.63 17.137 9.89 16.709 10.175 16.464C7.95 16.219 5.62 15.342 5.62 11.599C5.62 10.471 6.01 9.539 6.67 8.812C6.57 8.563 6.22 7.56 6.77 6.174C6.77 6.174 7.612 5.913 9.502 7.217C10.312 6.99 11.175 6.877 12.038 6.877C12.9 6.877 13.763 6.99 14.573 7.217C16.462 5.902 17.303 6.174 17.303 6.174C17.853 7.56 17.503 8.563 17.403 8.812C18.063 9.539 18.453 10.459 18.453 11.599C18.453 15.353 16.112 16.219 13.887 16.464C14.243 16.769 14.55 17.363 14.55 18.289C14.55 19.606 14.542 20.681 14.542 21.017C14.542 21.278 14.703 21.591 15.203 21.489C19.135 20.167 22 16.405 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                </a>
                <a href={teamMembers[3].socials.instagram} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a href={teamMembers[3].socials.discord} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        
        
          {/* Fifth row */}
          <div className="flex flex-row">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={teamMembers[4].image}
                alt={teamMembers[4].name}
                className="w-auto h-96 bg-green-500 object-cover aspect-[3/4]"
              />
              {/* <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button> */}
            </div>
            <div className="ml-6 flex flex-col justify-center">
              <div className="uppercase text-gray-500 text-lg mb-1 font-semibold">{teamMembers[4].role}</div>
              <h3 className="text-4xl font-bold mb-4 text-primary-500" style={{fontSize: '28px', lineHeight: '1.2'}}>{teamMembers[4].name}</h3>
              <ul className="mb-4">
                {teamMembers[4].skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400 mb-1">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a href={teamMembers[4].socials.github} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.781 9.492 20.015 9.492 19.185C7 19.673 6.35 18.577 6.15 17.992C6.037 17.689 5.55 16.783 5.125 16.546C4.775 16.357 4.275 15.868 5.112 15.857C5.9 15.845 6.462 16.611 6.65 16.926C7.55 18.437 8.988 18.031 9.54 17.769C9.63 17.137 9.89 16.709 10.175 16.464C7.95 16.219 5.62 15.342 5.62 11.599C5.62 10.471 6.01 9.539 6.67 8.812C6.57 8.563 6.22 7.56 6.77 6.174C6.77 6.174 7.612 5.913 9.502 7.217C10.312 6.99 11.175 6.877 12.038 6.877C12.9 6.877 13.763 6.99 14.573 7.217C16.462 5.902 17.303 6.174 17.303 6.174C17.853 7.56 17.503 8.563 17.403 8.812C18.063 9.539 18.453 10.459 18.453 11.599C18.453 15.353 16.112 16.219 13.887 16.464C14.243 16.769 14.55 17.363 14.55 18.289C14.55 19.606 14.542 20.681 14.542 21.017C14.542 21.278 14.703 21.591 15.203 21.489C19.135 20.167 22 16.405 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                </a>
                <a href={teamMembers[4].socials.instagram} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={teamMembers[4].socials.discord} className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
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