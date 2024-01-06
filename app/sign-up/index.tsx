// Libs
import { View, ScrollView, Platform } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

// Components
import { Input } from '@/components/input';
import { InputSecret } from '@/components/input-secret';

// Constants
import { THEME_COLORS } from '@/theme';

// Styles
import { styles } from './styles';

export default function SignUpScreen() {
  const router = useRouter();

  function navigateToLogin() {
    router.back();
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scroll_view_content_styles}
        style={styles.container}
      >
        {Platform.OS !== 'ios' && (
          <IconButton
            icon="arrow-left"
            containerColor={THEME_COLORS['blue-500']}
            mode="contained"
            iconColor={THEME_COLORS.white}
            onPress={navigateToLogin}
          />
        )}

        {/* Header */}
        <View>
          <Text variant="displayMedium">Nova conta</Text>
          <Text variant="bodyMedium" style={{ color: THEME_COLORS['gray-300'] }}>
            Informe os dados abaixo para criar sua conta
          </Text>
        </View>

        {/* Identification form */}
        <View style={styles.container_inputs}>
          <Text variant="headlineSmall">Identificação</Text>
          <Input label="Nome" />
          <Input label="Sobrenome" />
        </View>

        {/* account form */}
        <View style={styles.container_inputs}>
          <Text variant="headlineSmall">Conta</Text>
          <Input keyboardType="email-address" autoCapitalize="none" label="Digite seu email" />
          <InputSecret />
          <InputSecret label="Repita a sua senha" />
        </View>

        {/* Submit button */}
        <Button
          labelStyle={{ color: THEME_COLORS.white }}
          buttonColor={THEME_COLORS['blue-300']}
          onPress={console.log}
          mode="contained"
          style={styles.submit_button}
        >
          Criar
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
