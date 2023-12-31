// Libs
import { MD3DarkTheme } from 'react-native-paper';

// Constants
import { THEME } from '.';
import { FONTS } from '../../app/configs/theme/fonts';

// Types
import { type ThemeProp } from 'react-native-paper/lib/typescript/types';

export const PAPER_THEME: ThemeProp = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    onSurfaceVariant: THEME['blue-400'],
    onError: THEME.error
  },
  fonts: FONTS
};
