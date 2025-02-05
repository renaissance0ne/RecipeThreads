import React from "react";
import type { Metadata } from "next";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark } from '@clerk/themes'

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RecipeThreads",
  description: "Threads for recipes",
};

function Header() {
  return (
    <header className="flex justify-between p-5">
      <h1>Threads</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-dark-1`}>
        <ClerkProvider 
          appearance={{
          baseTheme: dark,
          }}>
          <Header />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}