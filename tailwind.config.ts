/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    fontSize: {
      'heading1-bold': [
        '36px',
        {
          lineHeight: '140%',
          fontWeight: '700'
        }
      ],
      'heading1-semibold': [
        '36px',
        {
          lineHeight: '140%',
          fontWeight: '600'
        }
      ],
      'heading2-bold': [
        '30px',
        {
          lineHeight: '140%',
          fontWeight: '700'
        }
      ],
      'heading2-semibold': [
        '30px',
        {
          lineHeight: '140%',
          fontWeight: '600'
        }
      ],
      'heading3-bold': [
        '24px',
        {
          lineHeight: '140%',
          fontWeight: '700'
        }
      ],
      'heading4-medium': [
        '20px',
        {
          lineHeight: '140%',
          fontWeight: '500'
        }
      ],
      'body-bold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '700'
        }
      ],
      'body-semibold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '600'
        }
      ],
      'body-medium': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '500'
        }
      ],
      'body-normal': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '400'
        }
      ],
      'body1-bold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '700'
        }
      ],
      'base-regular': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '400'
        }
      ],
      'base-medium': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '500'
        }
      ],
      'base-semibold': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '600'
        }
      ],
      'base1-semibold': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '600'
        }
      ],
      'small-regular': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '400'
        }
      ],
      'small-medium': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '500'
        }
      ],
      'small-semibold': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '600'
        }
      ],
      'subtle-medium': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '500'
        }
      ],
      'subtle-semibold': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '600'
        }
      ],
      'tiny-medium': [
        '10px',
        {
          lineHeight: '140%',
          fontWeight: '500'
        }
      ],
      'x-small-semibold': [
        '7px',
        {
          lineHeight: '9.318px',
          fontWeight: '600'
        }
      ]
    },
    extend: {
      colors: {
        'primary-500': '#877EFF',
        'secondary-500': '#6772e0',
        'accent-500': '#FF7E33',
        'accent-600': '#E06A1F',
        'accent-700': '#C35A16',
        blue: '#0095F6',
        'logout-btn': '#FF5A5A',
        'navbar-menu': 'rgba(16, 16, 18, 0.6)',
        'dark-1': '#000000',
        'dark-2': '#121417',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
        'gray-1': '#697C89',
        glassmorphism: 'rgba(16, 16, 18, 0.60)',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))"
      },
      boxShadow: {
        'count-badge': '0px 0px 6px 2px rgba(219, 188, 159, 0.30)',
        'groups-sidebar': '-30px 0px 60px 0px rgba(28, 28, 31, 0.50)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'strong': '0 12px 40px rgba(0, 0, 0, 0.12)'
      },
      screens: {
        xs: '400px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-slow': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient': 'gradient 8s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-slow': 'fade-in-slow 1s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 2s ease-in-out infinite'
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/background.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
        'accent-gradient': 'linear-gradient(135deg, #FF7E33 0%, #E06A1F 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;