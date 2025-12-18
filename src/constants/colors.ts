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

    primary: '#FAFAFA',
    primaryForeground: '#343434', 
    secondary: '#454545',
    secondaryForeground: '#FAFAFA',
    accent: '#454545',
    accentForeground: '#FAFAFA',
    
    // Fondos (oscuros)
    background: '#1E1E2E',
    foreground: '#FAFAFA',
    card: '#252525',
    cardForeground: '#FAFAFA',
    
    // Textos (claros en dark mode)
    text: '#FAFAFA',
    textSecondary: '#B5B5B5',
    
    // Estados (se mantienen igual para reconocimiento)
    success: '#00B894',
    warning: '#FDCB6E',
    error: '#FF7675',
    info: '#74B9FF',
    
    // UI Elements (adaptados a oscuro)
    border: '#454545',
    input: '#454545',
    inputBackground: '#2A2A2A',
    muted: '#454545',
    mutedForeground: '#B5B5B5',
    
    // Otros
    ring: '#707070',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
};

// Helper para obtener el color según el tema actual
export const getColor = (colorName: keyof typeof Colors.light, isDark: boolean = false) => {
  return isDark ? Colors.dark[colorName] : Colors.light[colorName];
};
