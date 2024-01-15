import { ResumeCard } from '@/screens/home/components';
import { styles } from '@/screens/home/styles';
import { THEME_COLORS } from '@/theme';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function Home() {
  return (
    <View style={styles.home_container}>
      <View>
        <Text variant="displaySmall">Início</Text>
        <Text style={{ color: THEME_COLORS['blue-300'] }}>
          Veja resumos sobre seus produtos, apartamentos e muito mais!
        </Text>
      </View>
      <View style={{ width: '100%', gap: 12, flexDirection: 'column' }}>
        <ResumeCard title="Item mais caro" itemName="Playstation 5" price={4500} room="Sala" />
        <ResumeCard title="Apê mais caro" itemName="Playstation 5" price={4500} room="Sala" />
        <ResumeCard title="Cômodo com mais gastos" itemName="5 itens" price={4500} room="Sala" />
      </View>
    </View>
  );
}
