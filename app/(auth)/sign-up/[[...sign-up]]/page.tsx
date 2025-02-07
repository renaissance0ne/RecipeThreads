'use client'

import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import SpotlightCard from '@/components/cards/SpotlightCard';
import Link from 'next/link';
import React, { useState, ReactElement, ChangeEvent } from 'react';

export default function LandingPage(): ReactElement {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div 
      className="min-h-screen w-full bg-black"
      style={{
        backgroundImage: "url('/assets/hero.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full min-h-screen pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Left side - Landing content */}
            <div className="w-full lg:w-7/12 pr-8">
              <div className="py-12">
                <h1 className="text-[7rem] font-bold mb-4 leading-tight drop-shadow-lg">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                    AMBROSIA
                  </span>
                </h1>
                <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">
                  Home Cooking, Reimagined
                </h2>
                <p className="text-2xl text-white mb-12 max-w-2xl drop-shadow-lg">
                  Join our community and rediscover the joy of home cooking. Share recipes, ask questions, and connect with cooks of all levels as you explore the delicious world of homemade food.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg backdrop-blur-sm">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white text-xl drop-shadow-lg">Connect with a global community</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg backdrop-blur-sm">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-white text-xl drop-shadow-lg">Access exclusive features</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg backdrop-blur-sm">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-white text-xl drop-shadow-lg">Grow your network</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Sign up form */}
            <div className="w-full lg:w-5/12">
              <div className="py-12 px-4">
                <SpotlightCard 
                  spotlightColor="rgba(111, 45, 168, 0.4)"
                  className="w-full max-w-md mx-auto"
                >
                  <div className="transform scale-90">
                    <SignUp.Root>
                      <SignUp.Step
                        name="start"
                        className="py-4 px-4 space-y-2"
                      >
                        <div className="space-y-2 text-center">
                          <h2 className="text-lg font-semibold text-white">Create an Account</h2>
                          <p className="text-sm text-gray-400">Join Ambrosia today</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-3">
                          <Clerk.Connection
                            name="google"
                            className="flex items-center gap-x-2 justify-center font-medium border border-gray-700 hover:bg-gray-800 transition-colors text-white py-2 px-3 rounded-lg text-sm"
                          >
                            <Clerk.Icon className="size-4" />
                            Google
                          </Clerk.Connection>
                          
                          <Clerk.Connection
                            name="facebook"
                            className="flex items-center gap-x-2 justify-center font-medium border border-gray-700 hover:bg-gray-800 transition-colors text-white py-2 px-3 rounded-lg text-sm"
                          >
                            <Clerk.Icon className="size-4" />
                            Facebook
                          </Clerk.Connection>
                        </div>

                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-neutral-900 text-gray-400">or</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-3">
                          <Clerk.Field name="firstName" className="space-y-1">
                            <Clerk.Label className="text-sm font-medium text-gray-300">
                              First name
                            </Clerk.Label>
                            <Clerk.Input 
                              className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-1.5 px-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Enter first name"
                            />
                            <Clerk.FieldError className="text-red-400 text-xs" />
                          </Clerk.Field>

                          <Clerk.Field name="lastName" className="space-y-1">
                            <Clerk.Label className="text-sm font-medium text-gray-300">
                              Last name
                            </Clerk.Label>
                            <Clerk.Input 
                              className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-1.5 px-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Enter last name"
                            />
                            <Clerk.FieldError className="text-red-400 text-xs" />
                          </Clerk.Field>
                        </div>

                        <Clerk.Field name="username" className="space-y-1">
                          <Clerk.Label className="text-sm font-medium text-gray-300">
                            Username
                          </Clerk.Label>
                          <Clerk.Input 
                            className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-1.5 px-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Choose a username"
                            value={username}
                            onChange={handleUsernameChange}
                          />
                          <Clerk.FieldError className="text-red-400 text-xs" />
                        </Clerk.Field>

                        <Clerk.Field name="emailAddress" className="space-y-1">
                          <Clerk.Label className="text-sm font-medium text-gray-300">
                            Email address
                          </Clerk.Label>
                          <Clerk.Input 
                            type="email"
                            className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-1.5 px-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <Clerk.FieldError className="text-red-400 text-xs" />
                        </Clerk.Field>

                        <Clerk.Field name="password" className="space-y-1">
                          <Clerk.Label className="text-sm font-medium text-gray-300">
                            Password
                          </Clerk.Label>
                          <Clerk.Input 
                            type="password"
                            className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-1.5 px-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Create a password"
                          />
                          <Clerk.FieldError className="text-red-400 text-xs" />
                        </Clerk.Field>

                        <div id="clerk-captcha" className="mt-3" />

                        <SignUp.Action 
                          submit 
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-2 px-4 transition-colors text-sm"
                        >
                          Create Account
                        </SignUp.Action>

                        <p className="text-center text-xs text-gray-400">
                          Already have an account?{' '}
                          <Link href="/sign-in" className="text-purple-400 hover:text-purple-300">
                            Sign in
                          </Link>
                        </p>
                      </SignUp.Step>

                      <SignUp.Step name="verifications" className="py-8 px-6 space-y-4">
                        <Clerk.Field name="code" className="space-y-1">
                          <Clerk.Label className="text-sm font-medium text-gray-300">
                            Enter verification code
                          </Clerk.Label>
                          <Clerk.Input 
                            className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-1.5 px-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Enter code"
                          />
                          <Clerk.FieldError className="text-red-400 text-xs" />
                        </Clerk.Field>
            
                        <SignUp.Action 
                          submit 
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-2 px-4 transition-colors text-sm"
                        >
                          Verify
                        </SignUp.Action>
                      </SignUp.Step>
                    </SignUp.Root>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}