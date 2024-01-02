// Libs
import { type Theme } from '@react-navigation/native';

// Constants
import { THEME_COLORS } from '@/theme';

export const ROUTER_THEME: Theme = {
  dark: true,
  colors: {
    primary: THEME_COLORS['blue-700'],
    background: THEME_COLORS['blue-800'],
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: THEME_COLORS['blue-400'],
    notification: 'rgb(255, 69, 58)'
  }
};
