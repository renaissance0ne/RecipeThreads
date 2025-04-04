import React from 'react';
import SpotlightCard from '@/components/effects/SpotlightCard';
import GradientText from '@/components/effects/GradientText';

export default function ChooseUs() {
  const cards = [
    {
      title: "Embrace a Healthier Lifestyle",
      content: "Over 60% of people rely on processed foods that can lead to health issues like obesity, heart disease, and diabetes. Our community encourages home cooking and healthier eating habits to help you take control of your wellbeing."
    },
    {
      title: "Instant, Free Expert Advice",
      content: "Say goodbye to delays and hidden fees. Our platform guarantees instant, free responses from a passionate community of cooking enthusiasts—ensuring you get the answers you need, right when you need them."
    },
    {
      title: "A Thriving, Interactive Community",
      content: "More than just a recipe site, we're a dynamic discussion hub. Ask questions, share tips, and connect with like-minded food lovers. Whether you're a novice or a pro, you belong here."
    },
    {
      title: "Discover Top-Rated Recipes and Tips",
      content: "Our innovative liking system elevates the most popular and helpful threads. New users can quickly explore top-rated content and learn from the best cooking practices shared by the community."
    },
    {
      title: "An Inclusive Space for All Cooks",
      content: "Cooking is for everyone! Join a community that's dedicated to making culinary knowledge accessible. Explore diverse cooking styles and get inspired by fellow home chefs without any barriers."
    }
  ];

  return (
    <section className="relative py-24 bg-dark-2 overflow-hidden">
      {/* MASSIVE title that takes up the entire screen */}
      <div className="h-screen w-full flex items-center justify-center mb-30 mt-48">
        <div className="w-full px-4">
          <GradientText
            colors={["#6366f1", "#d946ef", "#6366f1"]}
            animationSpeed={25}
            fontSize="10vw" // Extremely large font size based on viewport width
            className="font-extrabold tracking-tight text-center max-w-full leading-none"
          >
            This is what distinguishes our platform
          </GradientText>
        </div>
      </div>

      {/* Cards grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <SpotlightCard
              key={index}
              spotlightColor="rgba(111, 45, 168, 0.4)"
              className="p-8 bg-dark-2 border border-gray-800 rounded-xl h-full flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-300">{card.title}</h3>
              <p className="text-gray-300 flex-grow">{card.content}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}