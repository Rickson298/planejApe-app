import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider, type Theme } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import { THEME } from '@/theme';

export { ErrorBoundary } from 'expo-router';

export const UNSTABLE_SETTINGS = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)'
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    ...FontAwesome.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error != null) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const ROUTER_THEME: Theme = {
    dark: true,
    colors: {
      primary: THEME['blue-700'],
      background: THEME['blue-800'],
      card: 'rgb(18, 18, 18)',
      text: 'rgb(229, 229, 231)',
      border: THEME['blue-400'],
      notification: 'rgb(255, 69, 58)'
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <ThemeProvider value={ROUTER_THEME}>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
