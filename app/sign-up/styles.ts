// libs
import { StyleSheet } from 'react-native';

// Constants
import { THEME_COLORS } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 38
  },

  scroll_view_content_styles: {
    display: 'flex',
    gap: 32,
    paddingBottom: 40
  },

  container_inputs: {
    display: 'flex',
    gap: 8,
    width: '100%',
    backgroundColor: THEME_COLORS['blue-700'],
    padding: 16,
    paddingVertical: 20,
    borderRadius: 8
  },

  submit_button: { width: '100%', borderRadius: 32, paddingVertical: 4 }
});
