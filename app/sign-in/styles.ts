// libs
import { StyleSheet } from 'react-native';

// Constants
import { THEME_COLORS } from '@/theme';

const BALL_SIZE = 400;
const BALL_RADIUS = 200;

export const styles = StyleSheet.create({
  ball: {
    position: 'absolute',
    backgroundColor: THEME_COLORS['blue-700'],
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_RADIUS,
    top: -150,
    right: -250,
    borderWidth: 2,
    borderColor: THEME_COLORS['blue-600'],
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 60,
    paddingBottom: 85
  },

  ball_bottom: {
    borderWidth: 2,
    borderColor: THEME_COLORS['blue-600'],
    position: 'absolute',
    backgroundColor: THEME_COLORS['blue-700'],
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_RADIUS,
    bottom: -150,
    left: -250,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 40,
    paddingTop: 85
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
