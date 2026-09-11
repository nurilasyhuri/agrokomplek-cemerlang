/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Modern Pristine Canvas & Card Structure (Apple/Google design language)
        surface: {
          canvas: '#fafafa',     // Clean subtle off-white ground
          card: '#ffffff',       // Pure white content surface
          subtle: '#f4f4f5',     // Sleek zinc inset container
          border: '#e4e4e7',     // Ultra-clean 1px hairline border
          'border-dark': '#d4d4d8', // Contrast divider
        },
        // Modern Ink Hierarchy (Neutral Zinc & Slate)
        ink: {
          primary: '#09090b',    // Crisp high-contrast black
          secondary: '#52525b',  // Refined readable body
          muted: '#71717a',      // Subtle technical metadata
          inverse: '#ffffff',    // Text on dark buttons
        },
        // Brand Vibrant Emerald
        agri: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          600: '#059669',
          700: '#047857',        // Official brand emerald
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Functional Accent Warm Amber
        ochre: {
          50: '#fffbeb',
          100: '#fef3c7',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
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
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        md: '0 4px 14px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.03)',
        lg: '0 10px 25px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        xl: '0 20px 35px -5px rgba(0, 0, 0, 0.09), 0 8px 16px -4px rgba(0, 0, 0, 0.03)',
        card: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        hover: '0 12px 28px -4px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [],
};
