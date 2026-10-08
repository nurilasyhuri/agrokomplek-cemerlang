/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Industrial Steel Navy & Sky Glass Blue Palette
        // Primary: Deep Steel Navy (#0B1E36)
        // Secondary / Glass: Sky Glass Blue (#0284C7 / #38BDF8)
        // Accent: Solar Amber (#F59E0B)
        navy: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a8f8',
          500: '#0284c7', // Sky Glass Blue
          600: '#0369a1',
          700: '#0b1e36', // Core Deep Steel Navy
          800: '#081628', // Pressed Deep Navy
          900: '#050e1a', // Deepest Navy Ground
          950: '#03080f',
        },
        forest: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#0b1e36', // Core Steel Navy
          800: '#081628',
          900: '#050e1a',
          950: '#03080f',
        },
        leaf: {
          50: '#f0f9ff',  // Soft sky tint
          100: '#e0f2fe', // Sky card / badge
          200: '#bae6fd', // Sky glass border
          300: '#7dd3fc',
          400: '#38bdf8', // Bright sky glass on dark
          500: '#0284c7', // Core Sky Glass Blue
          600: '#0369a1', // Action sky blue
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
          950: '#041724',
        },
        sun: {
          50: '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b', // Solar Amber
          600: '#d97706',
        },
        // Override Emerald so all existing components seamlessly use Pure Biru Muda (Sky Glass Blue)
        emerald: {
          50: '#f0f9ff',  // Soft sky tint background
          100: '#e0f2fe', // Light sky badge/border bg
          200: '#bae6fd', // Sky border highlight
          300: '#7dd3fc', // Medium light sky
          400: '#38bdf8', // Biru muda terang (bright sky on dark)
          500: '#0ea5e9', // Biru muda cerah
          600: '#0284c7', // TOMBOL UTAMA BIRU MUDA (Core Sky Glass Blue)
          700: '#0284c7', // TULISAN TEKS BIRU MUDA (#0284C7)
          800: '#0369a1', // Teks biru muda kontras tinggi (#0369A1)
          900: '#0c4a6e', // Deep sky blue
          950: '#082f49', // Darkest sky
        },
        // Direct semantic tokens
        primary: '#0b1e36',
        'primary-hover': '#081628',
        dark: '#09090b',
        muted: '#64748b',
        secondary: '#f1f5f9',
        border: '#e2e8f0',
        bg: '#f8fafc',
        peach: '#f0f9ff',
        sand: '#f1f5f9',
        // Modern Pristine Canvas & Card Structure (Steel & Glass architecture)
        surface: {
          canvas: '#f8fafc',
          card: '#ffffff',
          subtle: '#f0f9ff',
          border: '#e2e8f0',
          'border-dark': '#cbd5e1',
        },
        // Modern Ink Hierarchy (Slate)
        ink: {
          primary: '#0f172a',
          secondary: '#334155',
          muted: '#64748b',
          inverse: '#ffffff',
        },
        // Brand Vibrant Agro Palette -> mapped to Steel Navy & Sky Glass
        agri: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0284c7',
          600: '#0369a1',
          700: '#0b1e36',
          800: '#081628',
          900: '#050e1a',
          950: '#03080f',
        },
        // Functional Accent Warm Amber / Sun
        ochre: {
          50: '#fffbeb',
          100: '#fef3c7',
          600: '#f59e0b',
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
