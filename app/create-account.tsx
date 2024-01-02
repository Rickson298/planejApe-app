// Libs
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Constants
import { THEME_COLORS } from '@/theme';

export default function CreateAccountScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: THEME_COLORS['blue-800'], flex: 1 }}>
      <Text>Criar conta</Text>
    </SafeAreaView>
  );
}
