import { StyleSheet, View, Pressable, Text } from "react-native";

export default function ResetButton({onButtonPress}) {

    return (
        <Pressable  style={styles.button} onPress={onButtonPress}>
            <Text style={styles.buttonText}>
                Play Again?
            </Text>
        </Pressable>
        
    );
  }

  const styles = StyleSheet.create({
    button: {
        backgroundColor: "#187795",
        borderWidth: 2,
        borderColor: "#38686A",
        borderStyle: "solid",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        margin: 20,
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 32,
        fontFamily: 'sans-serif',
        color: "#EAEAD7",
    },
  });