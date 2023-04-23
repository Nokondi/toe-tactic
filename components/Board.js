import { StyleSheet, View, Text } from "react-native";
import { useState } from 'react';

import Square from "./Square";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const updateSquareValue = (i) => {
        if (calculateWinner(squares)) {
            return;
        }
        const tmpSquares = squares.slice();
        if (!tmpSquares[i]) {
            if (xIsNext) {
                tmpSquares[i] = "X";
            } else {
                tmpSquares[i] = "O";
            }
            
        }
        setSquares(tmpSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <View style={styles.board}>
            <View style={styles.boardRow}>
                <Square 
                    value={squares[0]} 
                    onSquarePress={() => updateSquareValue(0)} />
                <Square 
                    value={squares[1]}
                    onSquarePress={() => updateSquareValue(1)} />
                <Square 
                    value={squares[2]}
                    onSquarePress={() => updateSquareValue(2)} />
            </View>
            <View style={styles.boardRow}>
                <Square 
                    value={squares[3]} 
                    onSquarePress={() => updateSquareValue(3)} />
                <Square 
                    value={squares[4]}
                    onSquarePress={() => updateSquareValue(4)} />
                <Square 
                    value={squares[5]}
                    onSquarePress={() => updateSquareValue(5)} />
            </View>
            <View style={styles.boardRow}>
                <Square 
                    value={squares[6]} 
                    onSquarePress={() => updateSquareValue(6)} />
                <Square 
                    value={squares[7]}
                    onSquarePress={() => updateSquareValue(7)} />
                <Square 
                    value={squares[8]}
                    onSquarePress={() => updateSquareValue(8)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    board: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 900,
        height: 900,
    },
    boardRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});