import { Pressable, StyleSheet, View } from "react-native";
import { useState } from 'react';

import Square from "./Square";
import WinBox from "./WinBox";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);

    const calculateMove = (squares) => {
        // Calculate each fighters' possible moves based on pattern of Xs
        // and Os after the final square is filled
    }

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
                setGameOver(true);
                setWinner(squares[a]);
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

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setGameOver(false);
        setXIsNext(true);
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
            <Pressable onPress={resetGame}>
                <WinBox isVisible={gameOver} winner={winner} />
            </Pressable>
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
    modalBox: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});