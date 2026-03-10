/**
 * BRICKWISE ADVISORS — DESIGN TOKENS (JS)
 * Use in: React components, Tailwind config, styled-components, CSS-in-JS
 * Source: Contentsquare 2024 rebrand (Saffron Brand Consultants)
 */

export const colors = {
  aubergine: {
    50:  '#F5EFF8',
    100: '#E9D8F0',
    200: '#D2B0E0',
    300: '#B080C8',
    400: '#8750A8',
    500: '#622880',
    600: '#4A1060',
    700: '#350B48',  // PRIMARY
    800: '#240630',
    900: '#160320',
  },
  carmine: {
    50:  '#FFF0EE',
    100: '#FFD8D2',
    200: '#FFB0A5',
    300: '#FF8877',
    400: '#FF6655',
    500: '#F24B3A',  // CTA ACCENT
    600: '#D93828',
    700: '#B52A1C',
    800: '#8C1E13',
    900: '#63150D',
  },
  coral: {
    DEFAULT: '#FF7A6E',
    light:   '#FFAD9E',
    dark:    '#E55E52',
  },
  neutral: {
    0:   '#FFFFFF',
    50:  '#FAF8F6',
    100: '#F2EDE8',
    200: '#E4DDD5',
    300: '#C8BFB5',
    400: '#9E9390',
    500: '#736B68',
    600: '#504945',
    700: '#332E2B',
    800: '#1E1A18',
    900: '#0E0C0B',
  },
  surface: {
    darkPrimary:   '#350B48',
    darkSecondary: '#240630',
    darkElevated:  '#4A1060',
    lightPrimary:  '#FFFFFF',
    lightSecondary:'#FAF8F6',
  },
  text: {
    onDark: {
      primary:   '#FFFFFF',
      secondary: '#DFCCE8',
      muted:     '#9E7DB5',
      accent:    '#FF7A6E',
    },
    onLight: {
      primary:   '#1E1A18',
      secondary: '#504945',
      muted:     '#9E9390',
      accent:    '#350B48',
    },
  },
  semantic: {
    success: { bg: '#D1FAE5', text: '#065F46' },
    warning: { bg: '#FEF9C3', text: '#854D0E' },
    error:   { bg: '#FEE2E2', text: '#991B1B' },
    info:    { bg: '#DBEAFE', text: '#1E40AF' },
  },
};

export const gradients = {
  heroPrimary:  'linear-gradient(135deg, #350B48 0%, #240630 60%, #1A0422 100%)',
  cardWarm:     'linear-gradient(135deg, #4A1060 0%, #350B48 100%)',
  accentCoral:  'linear-gradient(90deg, #F24B3A 0%, #FF7A6E 100%)',
  sectionLight: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F6 100%)',
  meshHero:     'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(242,75,58,0.18) 0%, transparent 70%), linear-gradient(135deg, #350B48 0%, #240630 100%)',
};

export const typography = {
  fontDisplay: "'DM Sans', sans-serif",
  fontBody:    "'Inter', system-ui, sans-serif",
  fontMono:    "'JetBrains Mono', monospace",
  scale: {
    xs:   '0.75rem',
    sm:   '0.875rem',
    base: '1rem',
    lg:   '1.125rem',
    xl:   '1.25rem',
    '2xl':'1.5rem',
    '3xl':'1.875rem',
    '4xl':'2.25rem',
    '5xl':'3rem',
    '6xl':'3.75rem',
    '7xl':'4.5rem',
  },
  headings: {
    h1: { fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: '1.05' },
    h2: { fontSize: 'clamp(2rem, 3.5vw, 3rem)',   fontWeight: 700, letterSpacing: '-0.03em', lineHeight: '1.1'  },
    h3: { fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '1.2'  },
    h4: { fontSize: '1.25rem',  fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '1.4' },
  },
};

export const spacing = {
  1:  '0.25rem',
  2:  '0.5rem',
  3:  '0.75rem',
  4:  '1rem',
  5:  '1.25rem',
  6:  '1.5rem',
  8:  '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
};

export const borderRadius = {
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  '2xl':'24px',
  '3xl':'32px',
  full: '9999px',
};

export const shadows = {
  xs:    '0 1px 3px rgba(53,11,72,0.06)',
  sm:    '0 2px 8px rgba(53,11,72,0.08)',
  md:    '0 4px 24px rgba(53,11,72,0.12), 0 2px 8px rgba(53,11,72,0.08)',
  lg:    '0 8px 40px rgba(53,11,72,0.16), 0 4px 16px rgba(53,11,72,0.10)',
  xl:    '0 16px 64px rgba(53,11,72,0.20), 0 8px 32px rgba(53,11,72,0.12)',
  '2xl': '0 24px 80px rgba(53,11,72,0.25)',
  glow:  '0 0 40px rgba(242,75,58,0.30)',
};

export const motion = {
  duration: { fast: '120ms', base: '200ms', slow: '350ms', slower: '500ms' },
  easing: {
    default:   'cubic-bezier(0.4, 0, 0.2, 1)',
    spring:    'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    smoothOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
};

export const layout = {
  navHeight: { desktop: '72px', mobile: '64px' },
  container: {
    sm:    '640px',
    md:    '768px',
    lg:    '1024px',
    xl:    '1280px',
    '2xl': '1440px',
  },
  breakpoints: {
    sm:  '640px',
    md:  '768px',
    lg:  '1024px',
    xl:  '1280px',
    '2xl':'1536px',
  },
};

/** Tailwind-compatible config extension */
export const tailwindExtend = {
  colors: {
    aubergine: colors.aubergine,
    carmine:   colors.carmine,
    coral:     colors.coral,
    bw:        colors.neutral,
  },
  fontFamily: {
    display: ['"DM Sans"', 'sans-serif'],
    body:    ['Inter', 'system-ui', 'sans-serif'],
    mono:    ['"JetBrains Mono"', 'monospace'],
  },
  borderRadius: {
    ...borderRadius,
    DEFAULT: '8px',
  },
  boxShadow: shadows,
};

export default {
  colors,
  gradients,
  typography,
  spacing,
  borderRadius,
  shadows,
  motion,
  layout,
  tailwindExtend,
};
