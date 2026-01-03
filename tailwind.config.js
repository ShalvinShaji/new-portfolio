/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Core Theme Colors ---
        bg: {
          main: '#030303',      // Deep Black: Main background
          card: '#0a0a0a',      // Lighter Black: Card backgrounds
          charcoal: '#1a1a1a',  // Charcoal: Gradient start
        },
        crimson: {
          DEFAULT: '#DC143C',   // Primary accent
          light: '#ff2a55',     // Hover state
        },
        // --- Typography Colors ---
        text: {
          white: '#ffffff',     // High emphasis
          gray: '#aaaaaa',      // Low emphasis
          muted: '#666666',      // Disabled/Muted
        },
        // --- Border and Utility Colors ---
        border: {
          main: '#333333',      // Standard borders
          faint: 'rgba(255, 255, 255, 0.05)', // Subtle dividers
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        // --- Semantic Typography System ---
        'size-nano': 'clamp(0.75rem, 0.70rem + 0.25vw, 0.875rem)',   // Label/Mono
        'size-tiny': 'clamp(0.81rem, 0.78rem + 0.15vw, 0.93rem)',      // Small text
        'size-body': 'clamp(0.93rem, 0.88rem + 0.3vw, 1.15rem)',      // Paragraphs
        'size-sub': 'clamp(1.15rem, 1.05rem + 0.5vw, 1.5rem)',       // Subheadings
        'size-h3': 'clamp(1.4rem, 1.25rem + 0.8vw, 2.1rem)',         // Section headers
        'size-h2': 'clamp(1.6rem, 1.4rem + 1.2vw, 2.8rem)',          // Large titles
        'size-index': 'clamp(5rem, 15vw, 12rem)',                     // Background numbering
        'size-h1': 'clamp(2.1rem, 1.8rem + 2.5vw, 4rem)',           // Massive titles
        'size-hero': 'clamp(2.1rem, 11vw, 13rem)',                      // Hero name
      },
      spacing: {
        'section-y': 'clamp(4rem, 10vh, 15vh)',
        'section-x': 'clamp(1.5rem, 6vw, 6vw)',
      },
      animation: {
        shimmer: 'shimmer 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
      letterSpacing: {
        'luxury': '1rem',
        'link': '0.2rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
