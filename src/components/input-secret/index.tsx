// Libs
import { useState } from 'react';
import { TextInput } from 'react-native-paper';

// Components
import { Input } from '../input';

// Constants
import { THEME_COLORS } from '@/theme';

// Types
import { type InputProps } from '../input/types';

export type InputSecretProps = InputProps;

export function InputSecret(props: InputSecretProps) {
  const [isSecret, setIsSecret] = useState(true);

  function handleSecretState() {
    setIsSecret(!isSecret);
  }

  return (
    <Input
      autoCapitalize="none"
      label="Digite sua senha"
      right={
        <TextInput.Icon
          color={THEME_COLORS['blue-400']}
          forceTextInputFocus={false}
          onPress={handleSecretState}
          icon={isSecret ? 'eye' : 'eye-off'}
        />
      }
      secureTextEntry={isSecret}
      {...props}
    />
  );
}
