export const APP_CONFIG = {
  name: 'Linked Together',
  version: '1.0.0',
  
  // Límites
  MAX_FRIENDS: 50,
  MAX_SOUNDPAD_SOUNDS: 20,
  BLINK_RACE_TIMEOUT: 3000, // 3 segundos
  
  // Horarios default
  DEFAULT_QUIET_HOURS: {
    start: '22:00',
    end: '08:00',
  },
  
  // Modos
  MODES: {
    NORMAL: 'normal',
    CLASS: 'class',
    SLEEP: 'sleep',
    PARTY: 'party',
    DO_NOT_DISTURB: 'dnd',
  },
};