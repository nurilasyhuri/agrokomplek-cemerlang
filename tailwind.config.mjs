/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Natural Agritech Canvas & Paper Structure
        surface: {
          canvas: '#f7f6f2',     // Unbleached warm technical ground
          card: '#ffffff',       // Pure white content surface
          subtle: '#efece4',     // Technical inset container
          border: '#dcd9d0',     // Crisp structural 1px hairline
          'border-dark': '#b5b2a6', // High-contrast dividing line
        },
        // Forest & Carbon Ink Hierarchy
        ink: {
          primary: '#111713',    // Deep high-contrast text
          secondary: '#364239',  // Readable explanatory text
          muted: '#637066',      // Technical metadata and labels
          inverse: '#ffffff',    // Text on dark buttons
        },
        // Brand Agritech Identity
        agri: {
          50: '#eef5f0',
          100: '#d7e8db',
          200: '#b1d2b8',
          600: '#236e47',
          700: '#165334',        // Official brand forest green
          800: '#0f3c25',        // Pressed / deep brand green
          900: '#0a2919',
          950: '#061a10',
        },
        // Functional Accent (Terracotta / Earth Amber)
        ochre: {
          50: '#fbf4ed',
          100: '#f5e5d3',
          600: '#c26219',
          700: '#a34e0f',
          800: '#873d08',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        xs: '3px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '20px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(17, 23, 19, 0.05)',
        md: '0 2px 6px -1px rgba(17, 23, 19, 0.08)',
        soft: '0 2px 8px 0 rgba(17, 23, 19, 0.06)',
        card: '0 4px 14px -2px rgba(17, 23, 19, 0.08)',
      },
    },
  },
  plugins: [],
};
