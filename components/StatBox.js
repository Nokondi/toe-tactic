import { View, Text, StyleSheet } from 'react-native';

export default function StatBox({ winner, gameOver, xIsNext }) {
return (
    <View style={styles.statContent}>
        {gameOver ? (
            <Text style={styles.statText}>{winner} WINS!</Text>
        ): (
        <Text style={styles.statText}>{xIsNext ? ("X") : ("O")} is next</Text>
        )}
    </View>
);
}

const styles = StyleSheet.create({
    statContent: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    statText: {
        color: '#38686A',
        fontSize: 32,
        fontFamily: 'sans-serif',
    },
});
  