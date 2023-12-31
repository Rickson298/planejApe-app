import { type ComponentProps } from 'react';
import { type TextInput } from 'react-native-paper';

export interface InputProps extends ComponentProps<typeof TextInput> {
  label?: string;
  placeholder?: string;
}
