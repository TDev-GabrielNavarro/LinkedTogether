export const Colors = {
  light: {
    // Principales
    primary: '#6C5CE7',
    primaryForeground: '#FFFFFF',
    secondary: '#A29BFE',
    secondaryForeground: '#FFFFFF',
    accent: '#FD79A8',
    accentForeground: '#FFFFFF',
    
    // Fondos
    background: '#FFFFFF',
    foreground: '#252525',
    card: '#FFFFFF',
    cardForeground: '#252525',
    
    // Textos
    text: '#252525',
    textSecondary: '#717182', // muted-foreground
    
    // Estados
    success: '#00B894',
    warning: '#FDCB6E',
    error: '#FF7675', // destructive
    info: '#74B9FF',
    
    // UI Elements
    border: 'rgba(0, 0, 0, 0.1)',
    input: 'transparent',
    inputBackground: '#F3F3F5',
    muted: '#ECECF0',
    mutedForeground: '#717182',
    
    // Otros
    ring: '#B5B5B5',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  
  dark: {

    primary: '#7C6CF7',
    primaryForeground: '#FFFFFF',
    secondary: '#B5ADFF',
    secondaryForeground: '#1A1A2E',
    accent: '#FF8FB9',
    accentForeground: '#1A1A2E',
    
    // Fondos (oscuros pero no negros puros)
    background: '#1A1A2E',
    foreground: '#EEEEF0',
    card: '#252541',
    cardForeground: '#EEEEF0',
    
    // Textos (CLAROS en dark)
    text: '#EEEEF0',
    textSecondary: '#A8A8B8',
    
    // Estados (vibrantes, se mantienen)
    success: '#00D9A5',
    warning: '#FFD93D',
    error: '#FF6B6B',
    info: '#74B9FF',
    
    // UI Elements
    border: 'rgba(255, 255, 255, 0.1)',
    input: '#2D2D44',
    inputBackground: '#2D2D44',
    muted: '#2D2D44',
    mutedForeground: '#A8A8B8',
    ring: '#7C6CF7',
    shadow: 'rgba(0, 0, 0, 0.5)',
  },
};

// Helper para obtener el color según el tema actual
export const getColor = (colorName: keyof typeof Colors.light, isDark: boolean = false) => {
  return isDark ? Colors.dark[colorName] : Colors.light[colorName];
};
