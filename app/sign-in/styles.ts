// libs
import { StyleSheet } from 'react-native';

// Constants
import { THEME_COLORS } from '@/theme';

export const styles = StyleSheet.create({
  social_media_container: {
    margin: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },

  social_media_button: {
    backgroundColor: THEME_COLORS['blue-400'],
    justifyContent: 'center',
    display: 'flex',
    padding: 14,
    alignItems: 'center',
    textAlign: 'center',
    width: 75,
    borderRadius: 14
  },

  create_account_text: {
    color: THEME_COLORS['blue-200'],
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    textDecorationLine: 'underline',
    fontSize: 12
  },

  forget_password_text: {
    color: THEME_COLORS['blue-300'],
    fontFamily: 'Poppins_400Regular',
    textDecorationLine: 'underline',
    fontSize: 12
  },

  container_password: {
    gap: 8,
    alignItems: 'flex-end'
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
    gap: 38,
    backgroundColor: THEME_COLORS['blue-800']
  },

  container_inputs: {
    display: 'flex',
    gap: 8,
    width: '100%'
  },

  submit_button: { width: '100%', borderRadius: 32, paddingVertical: 4 }
});
