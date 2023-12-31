import { configureFonts } from 'react-native-paper';

const baseFont = {
  fontFamily: 'Poppins_400Regular'
} as const;

const baseVariants = configureFonts({ config: baseFont });

const customVariants = {
  displayMedium: {
    ...baseVariants.displayMedium,
    fontFamily: 'Poppins_500Medium'
  },

  bold: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Poppins_600SemiBold'
  }
} as const;

export const FONTS = configureFonts({
  config: {
    ...baseVariants,
    ...customVariants
  }
});
