import { THEME_COLORS } from '@/theme';
import { View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, padding: 16 }}>
      <View
        style={{
          width: '100%',
          height: 150,
          backgroundColor: THEME_COLORS['blue-500'],
          borderRadius: 16
        }}
      />
      <View
        style={{
          width: '100%',
          height: 150,
          backgroundColor: THEME_COLORS['blue-500'],
          borderRadius: 16
        }}
      />
      <View
        style={{
          width: '100%',
          height: 150,
          backgroundColor: THEME_COLORS['blue-500'],
          borderRadius: 16
        }}
      />
    </View>
  );
}
