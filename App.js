import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Board from './components/Board';
import Square from './components/Square';

export default function App() {
  return (
    <View style={styles.container}>
        <Board>
            <View>
                <Square />
                <Square />
                <Square />
            </View>
            <View>
                <Square />
                <Square />
                <Square />
            </View>
            <View>
                <Square />
                <Square />
                <Square />
            </View>
        </Board>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
