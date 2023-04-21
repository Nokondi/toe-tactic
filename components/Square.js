import { StyleSheet, View, Pressable, Text } from "react-native";
import { useState } from 'react';

export default function Square() {

    const [value, setValue] = useState(null);

    const onSquarePress = () => {
        setValue('X');
    }

    return (
        <View style={styles.square}>
            <Pressable className="Square" onPress={onSquarePress}>
                {value}
            </Pressable>
        </View>
        
    );
  }

  const styles = StyleSheet.create({
    square: {
        backgroundColor: "#fff",
        borderColor: "#999",
        textAlign: "center",
        flex: 1,
        width: "33%",
        height: "100%",
        alignItems: "center",
    },
  });