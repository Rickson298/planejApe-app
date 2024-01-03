// Libs
import { View, Text as NativeText } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

// Components
import { Input } from '@/components/input';
import { InputSecret } from '@/components/input-secret';

// Constants
import { THEME_COLORS } from '@/theme';

// Styles
import { styles } from './styles';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      {/* Balls */}
      <View style={styles.ball}>
        <FontAwesome name="dollar" color={THEME_COLORS['blue-800']} size={100} />
      </View>
      <View style={styles.ball_bottom}>
        <FontAwesome name="home" color={THEME_COLORS['blue-800']} size={100} />
      </View>

      {/* Form */}
      <View>
        <Text variant="displayMedium">Bem-vindo</Text>
        <Text variant="bodyMedium" style={{ color: THEME_COLORS['gray-300'] }}>
          Entre com seu email e sua senha
        </Text>
      </View>

      {/* forget password button */}
      <View style={styles.container_inputs}>
        <Input keyboardType="email-address" label="Digite seu email" />
        <View style={styles.container_password}>
          <InputSecret />
          <Link style={styles.forget_password_text} href="/create-account">
            Esqueci a senha
          </Link>
        </View>
      </View>

      {/* Submit button */}
      <Button
        labelStyle={{ color: THEME_COLORS.white }}
        buttonColor={THEME_COLORS['blue-300']}
        onPress={console.log}
        mode="contained"
        style={styles.submit_button}
      >
        Entrar
      </Button>

      {/* Create account */}
      <Link style={styles.create_account_text} href="/create-account">
        <NativeText style={{ color: THEME_COLORS['blue-300'] }}>
          Ainda não tem uma conta?{' '}
        </NativeText>
        Crie uma conta
      </Link>
    </View>
  );
}
