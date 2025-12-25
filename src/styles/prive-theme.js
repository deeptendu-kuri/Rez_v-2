/**
 * ReZ Privé Theme System
 * Luxury dark theme with gold accents
 * Think: Amex Black × Apple × Wyld
 *
 * Exact copy from rezprive-source
 */

export const priveColors = {
  // Primary backgrounds
  background: {
    primary: '#0A0A0A',      // Deep black
    secondary: '#141414',    // Charcoal
    tertiary: '#1C1C1E',     // Dark grey
    elevated: '#1F1F1F',     // Elevated surfaces
    card: '#181818',         // Card backgrounds
  },

  // Gold accent system (use sparingly)
  gold: {
    primary: '#C9A962',      // Main gold
    light: '#D4B978',        // Light gold
    dark: '#A88B4A',         // Dark gold
    muted: '#8B7355',        // Muted gold
    glow: 'rgba(201, 169, 98, 0.15)', // Subtle glow
    gradient: ['#C9A962', '#A88B4A'], // Gold gradient
  },

  // Text hierarchy
  text: {
    primary: '#FFFFFF',      // Primary text
    secondary: '#A0A0A0',    // Secondary text
    tertiary: '#6B6B6B',     // Tertiary/muted text
    disabled: '#4A4A4A',     // Disabled text
    inverse: '#0A0A0A',      // Text on light backgrounds
  },

  // Status colors (subtle, not loud)
  status: {
    success: '#4CAF50',      // Verified, completed
    successMuted: '#2E7D32', // Muted success
    warning: '#FF9800',      // Pending, attention
    warningMuted: '#E65100', // Muted warning
    error: '#EF5350',        // Error, rejected
    errorMuted: '#C62828',   // Muted error
    info: '#64B5F6',         // Information
  },

  // Borders and dividers
  border: {
    primary: '#2A2A2A',      // Primary borders
    secondary: '#1F1F1F',    // Subtle borders
    gold: '#C9A962',         // Gold borders (for status)
    goldMuted: 'rgba(201, 169, 98, 0.3)', // Muted gold border
  },

  // Overlay and shadows
  overlay: {
    light: 'rgba(255, 255, 255, 0.05)',
    dark: 'rgba(0, 0, 0, 0.5)',
    card: 'rgba(0, 0, 0, 0.7)',
  },

  // Transparent variants
  transparent: {
    white10: 'rgba(255, 255, 255, 0.1)',
    white20: 'rgba(255, 255, 255, 0.2)',
    black50: 'rgba(0, 0, 0, 0.5)',
    gold10: 'rgba(201, 169, 98, 0.1)',
    gold20: 'rgba(201, 169, 98, 0.2)',
  },
};

export const priveTypography = {
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  fontSize: {
    xs: '11px',
    sm: '13px',
    base: '15px',
    md: '17px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '34px',
    '4xl': '40px',
    '5xl': '48px',
  },

  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },

  letterSpacing: {
    tighter: '-0.5px',
    tight: '-0.25px',
    normal: '0',
    wide: '0.5px',
    wider: '1px',
    widest: '2px',
  },
};

export const priveSpacing = {
  // Base spacing scale
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',

  // Semantic spacing
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

export const priveBorderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
};

export const priveScreenPadding = {
  horizontal: '20px',
  vertical: '24px',
  top: '48px',
  bottom: '32px',
};

export const priveCardPadding = {
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
};

export const priveIconSize = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '28px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
};

// Extra padding for screens with floating tab bar
export const floatingTabBarHeight = 64;
export const floatingTabBarMargin = 16;
export const floatingTabBarTotalHeight = 96; // floatingTabBarHeight + floatingTabBarMargin + 16

// Complete theme export
export const priveTheme = {
  colors: priveColors,
  typography: priveTypography,
  spacing: priveSpacing,
  borderRadius: priveBorderRadius,
  screenPadding: priveScreenPadding,
  cardPadding: priveCardPadding,
  iconSize: priveIconSize,
  floatingTabBarHeight,
  floatingTabBarMargin,
  floatingTabBarTotalHeight,
};
