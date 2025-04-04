'use client'

import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import SpotlightCard from '@/components/effects/SpotlightCard';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      {/* Sign-up component - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-black p-4 md:p-8">
        <SpotlightCard 
          spotlightColor="rgba(111, 45, 168, 0.4)"
          className="w-full max-w-md"
        >
          <div className="transform scale-95">
            <SignUp.Root>
              <SignUp.Step
                name="start"
                className="py-4 px-4 space-y-2"
              >
                <div className="space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-white">Create an Account</h2>
                  <p className="text-sm text-gray-400">Join Ambrosia today</p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-neutral-900 text-gray-400"></span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">
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

        {/* Added text below the component */}
        <div className="mt-6 text-center max-w-md">
          <p className="text-gray-400 text-xs">
            By creating an account, you agree to our <a href="/terms" className="text-purple-400 hover:text-purple-300">Terms of Service</a> and <a href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2025 Ambrosia. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right half - Image only on medium screens and larger */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image 
          src="/assets/sup.jpg" 
          alt="Sign-up background" 
          fill 
          className="object-cover" 
          priority
        />
      </div>
    </div>
  );
}