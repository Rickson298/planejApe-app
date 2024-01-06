// Libs
import { useEffect } from 'react';
import {
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';
import { SplashScreen, Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { View } from 'react-native';

// Constants
import { PAPER_THEME } from '@/theme/paper-theme';
import { ROUTER_THEME } from '@/configs/router/theme';
import { THEME_COLORS } from '@/theme';

// Exports
export { ErrorBoundary } from 'expo-router';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  initialRouteName: '(app)'
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
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
  return (
    <SafeAreaProvider>
      <View style={{ padding: 0, margin: 0, flex: 1, backgroundColor: THEME_COLORS['blue-800'] }}>
        <PaperProvider theme={PAPER_THEME}>
          <StatusBar style="light" />
          <ThemeProvider value={ROUTER_THEME}>
            <Stack>
              <Stack.Screen name="(app)" options={{ headerShown: false }} />
              <Stack.Screen
                name="sign-up"
                options={{ presentation: 'modal', headerShown: false }}
              />
              <Stack.Screen
                name="sign-in"
                options={{ presentation: 'modal', headerShown: false }}
              />
            </Stack>
          </ThemeProvider>
        </PaperProvider>
      </View>
    </SafeAreaProvider>
  );
}
