import React from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark } from '@clerk/themes';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambrosia",
  description: "Threads for cooking!",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#877EFF",
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-black`}>
          <main className="flex justify-center min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}