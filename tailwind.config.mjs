/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Direct Tokens (Organic Botanical Earth - Reference: Earthly / Lounge Lizard)
        primary: '#213420',          // Deep Botanical Forest Olive (Main brand & button)
        'primary-hover': '#2d442c',  // Botanical hover
        dark: '#141d13',             // Deepest botanical dark
        muted: '#767e73',            // Earthy muted text
        secondary: '#e4e5da',        // Soft sage-oat inset
        border: '#dedad0',           // Warm organic hairline border
        bg: '#efebe2',               // Warm natural linen / oat canvas
        peach: '#f4f1ea',
        sand: '#edeae1',
        linen: '#f4f1ea',
        // Modern Organic Canvas & Card Structure (Earthly sustainable aesthetic)
        surface: {
          canvas: '#efebe2',     // Earthly Warm Linen / Oat Canvas
          card: '#ffffff',       // Pure white card
          subtle: '#e4e5da',     // Soft sage-oat container
          border: '#dedad0',     // Warm hairline divider
          'border-dark': '#c8c3b7',
        },
        // Modern Botanical Ink Hierarchy
        ink: {
          primary: '#1b2819',    // Deep Botanical Dark Ink (Headlines)
          secondary: '#485245',  // Readable botanical body copy
          muted: '#767e73',      // Technical metadata
          inverse: '#ffffff',    // Text on dark buttons
        },
        // Botanical Forest & Sage Spectrum (Agri Palette)
        agri: {
          50: '#f5f6f4',
          100: '#e5eae3',
          200: '#ccd7c9',
          300: '#a9bfa4',
          400: '#7e9f78',
          500: '#5a8053',
          600: '#3f6239',
          700: '#2d4729',
          800: '#213420',        // Earthly Primary Signature
          900: '#1b2a19',        // Earthly Dark Forest
          950: '#141d13',        // Midnight Forest
        },
        // Warm Organic Gold / Honey Accent
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#eab308',
          500: '#ca8a04',
          600: '#a16207',
          700: '#854d0e',
          800: '#713f12',
          900: '#422006',
          metallic: '#c59b27',
        },
        ochre: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#eab308',
          500: '#ca8a04',
          600: '#a16207',
          700: '#854d0e',
          800: '#713f12',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '10px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        md: '0 4px 12px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -2px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 25px -4px rgba(0, 0, 0, 0.06), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        xl: '0 20px 35px -5px rgba(0, 0, 0, 0.08), 0 8px 16px -4px rgba(0, 0, 0, 0.03)',
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        hover: '0 10px 25px -4px rgba(0, 0, 0, 0.06), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
