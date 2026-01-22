export const COLORS = {
  light: {
    primary: '#4f46e5',
    secondary: '#7c3aed',
    accent: '#059669',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    textSecondary: '#475569',
    border: '#e2e8f0',
    error: '#dc2626',
    success: '#059669',
    cardBg: '#ffffff',
    gradient1: '#6366f1',
    gradient2: '#8b5cf6',
    highlight: '#fef3c7',
    accentLight: '#dbeafe',
  },
  dark: {
    primary: '#818cf8',
    secondary: '#c084fc',
    accent: '#34d399',
    background: '#020617',
    surface: '#0f172a',
    text: '#f1f5f9',
    textSecondary: '#cbd5e1',
    border: '#1e293b',
    error: '#f87171',
    success: '#34d399',
    cardBg: '#0f172a',
    gradient1: '#6366f1',
    gradient2: '#a78bfa',
    highlight: '#1e1b4b',
    accentLight: '#1e293b',
  },
};

export const FONTS = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const SIZES = {
  width: 1200, // Max content width
  borderRadius: 12,
  borderRadiusSm: 8,
  borderRadiusLg: 16,
};

export const SHADOWS = {
  light: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
  dark: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.5,
      shadowRadius: 16,
      elevation: 8,
    },
  },
};

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1200,
};
