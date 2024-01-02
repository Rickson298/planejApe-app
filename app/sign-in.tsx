// Libs
import { StyleSheet, View, Text as NativeText } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

// Components
import { Input } from '@/components/input';
import { InputSecret } from '@/components/input-secret';

// Constants
import { THEME_COLORS } from '@/theme';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ball} />
      <View style={styles.ball_bottom} />
      <FontAwesome
        name="home"
        color={THEME_COLORS['blue-800']}
        size={100}
        style={{ position: 'absolute', left: 15, bottom: 50 }}
      />
      <FontAwesome
        name="dollar"
        color={THEME_COLORS['blue-800']}
        size={100}
        style={{ position: 'absolute', right: 15, top: 50 }}
      />

      <View>
        <Text variant="displayMedium">Bem-vindo</Text>
        <Text variant="bodyMedium" style={{ color: THEME_COLORS['gray-300'] }}>
          Entre com seu email e sua senha
        </Text>
      </View>

      <View style={styles.container_inputs}>
        <Input keyboardType="email-address" label="Digite seu email" />
        <View style={styles.container_password}>
          <InputSecret />
          <Link style={styles.forget_password_text} href="/create-account">
            Esqueci a senha
          </Link>
        </View>
      </View>

      <Button
        labelStyle={{ color: THEME_COLORS.white }}
        buttonColor={THEME_COLORS['blue-300']}
        onPress={console.log}
        mode="contained"
        style={styles.submit_button}
      >
        Entrar
      </Button>
      <Link style={styles.create_account_text} href="/(app)/">
        <NativeText style={{ color: THEME_COLORS['blue-300'] }}>
          Ainda não tem uma conta?{' '}
        </NativeText>
        Crie uma conta
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    position: 'absolute',
    backgroundColor: THEME_COLORS['blue-700'],
    width: 400,
    height: 400,
    borderRadius: 250,
    top: -150,
    right: -250,
    borderWidth: 2,
    borderColor: THEME_COLORS['blue-600']
  },
  ball_bottom: {
    borderWidth: 2,
    borderColor: THEME_COLORS['blue-600'],
    position: 'absolute',
    backgroundColor: THEME_COLORS['blue-700'],
    width: 400,
    height: 400,
    borderRadius: 250,
    bottom: -150,
    left: -250
  },

  create_account_text: {
    color: THEME_COLORS['blue-200'],
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    textDecorationLine: 'underline',
    fontSize: 12
  },

  forget_password_text: {
    color: THEME_COLORS['blue-300'],
    fontFamily: 'Poppins_400Regular',
    textDecorationLine: 'underline',
    fontSize: 12
  },

  container_password: {
    gap: 8,
    alignItems: 'flex-end'
  },

  helper_buttons: {
    justifyContent: 'space-between',
    width: '100%'
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
    gap: 38,
    backgroundColor: THEME_COLORS['blue-800']
  },

  container_inputs: {
    display: 'flex',
    gap: 8,
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },

  submit_button: { width: '100%', borderRadius: 32, paddingVertical: 4 }
});
