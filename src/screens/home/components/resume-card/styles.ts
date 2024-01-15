import { THEME_COLORS } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: THEME_COLORS['blue-600'],
    borderRadius: 24,
    padding: 20,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: THEME_COLORS['blue-400']
  },

  price_text: {
    marginLeft: 'auto',
    fontFamily: 'Poppins_500Medium',
    color: THEME_COLORS['blue-100']
  }
});
