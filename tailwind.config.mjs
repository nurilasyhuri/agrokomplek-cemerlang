/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Two-Green Ecosystem from Green Harvest reference
        // Green 1: Deep Forest Green (#0D4C15)
        // Green 2: Fresh Leaf Green (#74A516)
        // Accent: Warm Sunshine Gold (#F8B502)
        forest: {
          50: '#f0f7f1',
          100: '#dceee0',
          200: '#bbdec2',
          300: '#8ec599',
          400: '#5ba66b',
          500: '#39874a',
          600: '#1b672c',
          700: '#0d4c15', // Core Deep Forest Green
          800: '#0a3d11',
          900: '#08330e', // Deep Pine / Dark Bar
          950: '#041c08',
        },
        leaf: {
          50: '#f5faec',  // Soft leaf tint
          100: '#e7f4d2', // Soft leaf card / badge
          200: '#d0eaab', // Leaf border
          300: '#b1dc76',
          400: '#8fc73b', // Bright sunny leaf on dark
          500: '#74a516', // Core Fresh Leaf Green
          600: '#5c860e', // Action leaf green
          700: '#46670e',
          800: '#385210',
          900: '#304512',
          950: '#182705',
        },
        sun: {
          50: '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f8b502', // Warm sunshine gold
          600: '#d97706',
        },
        // Override Emerald so all existing components adapt seamlessly to the 2 greens
        emerald: {
          50: '#f5faec',  // Fresh leaf tint background
          100: '#e7f4d2', // Soft leaf border/badge bg
          200: '#d0eaab', // Leaf border accent
          300: '#b1dc76', // Fresh leaf medium
          400: '#8fc73b', // Bright spring leaf (high contrast on dark)
          500: '#74a516', // CORE FRESH LEAF GREEN
          600: '#5c860e', // Fresh leaf button / active state
          700: '#0d4c15', // CORE DEEP FOREST GREEN
          800: '#0a3d11', // Deep dark forest
          900: '#08330e', // Deep pine forest
          950: '#041c08', // Darkest night forest
        },
        // Direct semantic tokens
        primary: '#0d4c15',
        'primary-hover': '#0a3d11',
        dark: '#09090b',
        muted: '#71717a',
        secondary: '#f4f4f5',
        border: '#e4e4e7',
        bg: '#fafafa',
        peach: '#f5faec',
        sand: '#f5f5f4',
        // Modern Pristine Canvas & Card Structure (Apple/Google design language)
        surface: {
          canvas: '#fafafa',
          card: '#ffffff',
          subtle: '#f5faec',
          border: '#e4e4e7',
          'border-dark': '#d4d4d8',
        },
        // Modern Ink Hierarchy (Neutral Zinc & Slate)
        ink: {
          primary: '#09090b',
          secondary: '#52525b',
          muted: '#71717a',
          inverse: '#ffffff',
        },
        // Brand Vibrant Agro Palette
        agri: {
          50: '#f5faec',
          100: '#e7f4d2',
          200: '#d0eaab',
          500: '#74a516',
          600: '#5c860e',
          700: '#0d4c15',
          800: '#0a3d11',
          900: '#08330e',
          950: '#041c08',
        },
        // Functional Accent Warm Amber / Sun
        ochre: {
          50: '#fffbeb',
          100: '#fef3c7',
          600: '#f8b502',
          700: '#d97706',
          800: '#b45309',
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
