import { Pressable, StyleSheet, View } from "react-native";
import { useState } from 'react';

import Square from "./Square";
import StatBox from "./StatBox";
import ResetButton from "./ResetButton";

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
                setWinner(squares[a]);
                setGameOver(true);
                return true;
            }
        }
        return false;
    }

    const updateSquareValue = (i) => {
        const tmpSquares = squares.slice();
        if (!tmpSquares[i] && !gameOver) {
            if (xIsNext) {
                tmpSquares[i] = "X";
            } else {
                tmpSquares[i] = "O";
            }
            setSquares(tmpSquares);
            setXIsNext(!xIsNext);            
        }
        calculateWinner(tmpSquares);
    }

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setGameOver(false);
        setXIsNext(true);
    }

    return (
        <View style={styles.container}>
            <StatBox gameOver={gameOver} winner={winner} xIsNext={xIsNext} />
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
            {gameOver ? (
                <ResetButton onButtonPress={resetGame} />
            ) : (
                <View style={styles.placeholderView} />
            )}
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    board: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    boardRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    placeholderView: {
        height: 60,
        margin: 20,
    }
});