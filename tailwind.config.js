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
        'size-tiny': 'clamp(0.875rem, 0.84rem + 0.18vw, 1rem)',      // Small text
        'size-body': 'clamp(1rem, 0.93rem + 0.35vw, 1.25rem)',      // Paragraphs
        'size-sub': 'clamp(1.25rem, 1.12rem + 0.65vw, 1.75rem)',     // Subheadings
        'size-h3': 'clamp(1.56rem, 1.35rem + 1.05vw, 2.35rem)',      // Section headers
        'size-h2': 'clamp(1.95rem, 1.62rem + 1.63vw, 3.15rem)',      // Large titles
        'size-h1': 'clamp(2.44rem, 1.94rem + 2.49vw, 4.30rem)',      // Massive titles
        'size-hero': 'clamp(2.5rem, 12vw, 13rem)',                      // Hero name
      },
      spacing: {
        'section-y': 'clamp(4rem, 10vh, 15vh)',
        'section-x': 'clamp(1.5rem, 6vw, 6vw)',
      },
      animation: {},
      keyframes: {},
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
