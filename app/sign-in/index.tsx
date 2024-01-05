// Libs
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text as NativeText, TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

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

      <View style={styles.social_media_container}>
        <Text>Ou faça login com:</Text>
        <TouchableOpacity onPress={console.log} style={styles.social_media_button}>
          <AntDesign name="google" size={30} color={THEME_COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
