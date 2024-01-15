// libs
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';

import { THEME_COLORS } from '@/theme';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  initialRouteName: '/products'
};

export default function AppLayout() {
  const session = true;

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: THEME_COLORS['blue-800'] },
        tabBarActiveTintColor: THEME_COLORS['blue-300'],
        headerTintColor: THEME_COLORS.white,
        tabBarStyle: {
          backgroundColor: THEME_COLORS['blue-800']
        },
        unmountOnBlur: true
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Início',
          title: 'Início',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarLabel: 'Produtos',
          title: 'Produtos',
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={20} color={color} />
        }}
      />
    </Tabs>
  );
}
