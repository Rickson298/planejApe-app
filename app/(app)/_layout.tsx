// libs
import { AntDesign } from '@expo/vector-icons';
import { Redirect } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { THEME_COLORS } from '@/theme';

export default function AppLayout() {
  const session = false;

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: THEME_COLORS['blue-800'] },
          headerTintColor: THEME_COLORS.white,
          drawerActiveTintColor: '#496985',
          drawerStyle: {
            backgroundColor: THEME_COLORS['blue-800']
          }
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início',
            title: 'Page 1',
            drawerIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="other"
          options={{
            drawerLabel: 'Other',
            title: 'Page 1',
            drawerIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
