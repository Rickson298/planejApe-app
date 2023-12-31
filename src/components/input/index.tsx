// Libs
import { TextInput } from 'react-native-paper';

// Constants
import { THEME } from '@/theme';

// Types
import { type InputProps } from './types';

export function Input({ placeholder, label, ...rest }: InputProps) {
  return (
    <TextInput
      textColor={THEME.white}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      style={{ backgroundColor: THEME['blue-700'], width: '100%' }}
      outlineColor={THEME['blue-400']}
      activeOutlineColor={THEME['blue-300']}
      outlineStyle={{
        borderRadius: 8
      }}
      {...rest}
    />
  );
}
