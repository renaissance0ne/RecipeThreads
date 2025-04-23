# Ambrosia

![Ambrosia Logo](https://github.com/renaissance0ne/RecipeThreads/blob/main/public/assets/logo.svg)

## A Social Platform for Cooking Enthusiasts

Ambrosia is a dedicated social platform where cooking enthusiasts can share recipes, cooking advice, tips, and tricks. Connect with other food lovers, build communities around culinary interests, and discover new cooking inspirations.

Live site: [ambrosia-chi.vercel.app](https://ambrosia-chi.vercel.app/home)

## Features

- **Thread-based discussions** - Create and participate in cooking-related conversations
- **User profiles** - Customize your profile and showcase your culinary expertise
- **Communities** - Join or create communities focused on specific cuisines or cooking styles
- **Activity tracking** - Stay updated on replies to your threads
- **Search functionality** - Find users, communities, and cooking content
- **Responsive design** - Seamless experience across desktop and mobile devices

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Authentication**: [Clerk](https://clerk.dev)
- **Styling**: Tailwind CSS
- **Deployment**: [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/ambrosia.git
   cd ambrosia
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add your Clerk API keys and other environment variables
   ```bash
   # Clerk configuration
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   
   # MongoDB connection string
   MONGODB_URL=your_mongodb_connection_string_here
   
   # UploadThing credentials
   UPLOADTHING_SECRET=your_uploadthing_secret_here
   UPLOADTHING_APP_ID=your_uploadthing_app_id_here
   
   # Gemini API key
   GEMINI_API_KEY=your_gemini_api_key_here
   ```


5. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Project Structure

- `app/(root)/*` - Main application routes
- `app/(auth)/*` - Authentication related routes
- `components/` - Reusable UI components
- `lib/actions/` - Server actions for data fetching and manipulation
- `public/` - Static assets

## Core Routes

- `/` - Homepage with thread feed
- `/profile/[id]` - User profiles with threads and replies
- `/communities` - Browse and join communities
- `/create-thread` - Create new cooking discussions
- `/thread/[id]` - Individual thread view with comments
- `/search` - Find users and content
- `/activity` - Track notifications and replies

## Deployment

The easiest way to deploy Ambrosia is using the [Vercel Platform](https://vercel.com):

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Set up the required environment variables
4. Deploy

## License

[MIT License](LICENSE)

## Acknowledgements

- [Next.js](https://nextjs.org) - The React framework for production
- [Clerk](https://clerk.dev) - Authentication and user management
- [Tailwind CSS](https://tailwindcss.com) - For styling
- [Vercel](https://vercel.com) - For hosting and deployment
