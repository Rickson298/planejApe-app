// Libs
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

// Components
import { Input } from '@/components/input';
import { InputSecret } from '@/components/input-secret';

// Constants
import { THEME } from '@/theme';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text variant="displayMedium">Bem-vindo</Text>
        <Text variant="bodyMedium" style={{ color: THEME['gray-300'] }}>
          Entra com seu email e sua senha
        </Text>
      </View>
      <View style={styles.container_inputs}>
        <Input keyboardType="email-address" label="Digite seu email" />
        <View>
          <InputSecret />
          <Button
            labelStyle={{ fontFamily: 'Poppins_600SemiBold', textDecorationLine: 'underline' }}
            style={{ marginLeft: 'auto' }}
            textColor={THEME['blue-300']}
          >
            Esqueci a senha
          </Button>
        </View>
      </View>
      <Button
        labelStyle={{ color: THEME.white }}
        buttonColor={THEME['blue-300']}
        onPress={console.log}
        mode="contained"
        style={styles.submit_button}
      >
        Entrar
      </Button>
      <View style={styles.helper_buttons}>
        <Button
          rippleColor="transparent"
          onPress={console.log}
          labelStyle={{ fontFamily: 'Poppins_600SemiBold', textDecorationLine: 'underline' }}
          textColor={THEME['blue-300']}
        >
          Criar uma conta
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  helper_buttons: {
    justifyContent: 'space-between',
    width: '100%'
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
    gap: 38
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
