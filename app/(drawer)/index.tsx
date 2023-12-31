import { THEME } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: THEME.white }} variant="displayMedium">
        Tab One
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
