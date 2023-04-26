import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Square({value, onSquarePress}) {

    return (
        <View style={styles.square}>
            <Pressable style={styles.button} onPress={onSquarePress}>
                <Text style={styles.buttonText}>
                    {value}
                </Text>
            </Pressable>
        </View>
        
    );
  }

  const styles = StyleSheet.create({
    square: {
        borderWidth: 2,
        borderColor: "#38686A",
        borderStyle: "solid",
        color: "#000",
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 72,
        fontFamily: 'sans-serif',
        color: "#187795",
    },
  });