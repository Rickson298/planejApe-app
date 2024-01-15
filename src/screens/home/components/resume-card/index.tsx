import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';

import { styles } from './styles';

import { type ResumeCardProps } from './types';

export function ResumeCard({
  itemName = '-',
  price = 0,
  title = 'Não definido',
  room = 'Cômodo não definido'
}: ResumeCardProps) {
  function formatCurrency(value: number) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  const formattedPrice = formatCurrency(price);

  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutUp} style={styles.container}>
      <Text variant="titleMedium" style={{ fontFamily: 'Poppins_500Medium' }}>
        {title}
      </Text>
      <View>
        <Text>{itemName}</Text>
        <Text>{room}</Text>
      </View>
      <Text variant="titleMedium" style={styles.price_text}>
        {formattedPrice}
      </Text>
    </Animated.View>
  );
}
