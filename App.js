import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Board from './components/Board';

export default function App() {
  return (
    <View style={styles.container}> 
        <Board />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAD7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
