// Libs
import { TextInput } from 'react-native-paper';

// Constants
import { THEME_COLORS } from '@/theme';

// Types
import { type InputProps } from './types';

export function Input({ placeholder, label, ...rest }: InputProps) {
  return (
    <TextInput
      textColor={THEME_COLORS.white}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      style={{ backgroundColor: THEME_COLORS['blue-700'], width: '100%' }}
      outlineColor={THEME_COLORS['blue-400']}
      activeOutlineColor={THEME_COLORS['blue-300']}
      outlineStyle={{
        borderRadius: 8
      }}
      {...rest}
    />
  );
}
