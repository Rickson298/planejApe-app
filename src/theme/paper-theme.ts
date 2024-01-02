// Libs
import { MD3DarkTheme } from 'react-native-paper';

// Constants
import { THEME_COLORS } from '.';
import { FONTS } from '@/configs/theme/fonts';

// Types
import { type ThemeProp } from 'react-native-paper/lib/typescript/types';

export const PAPER_THEME: ThemeProp = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    onSurfaceVariant: THEME_COLORS['blue-400'],
    onError: THEME_COLORS.error
  },
  fonts: FONTS
};
