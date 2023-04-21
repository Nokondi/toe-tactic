import { StyleSheet, View, Pressable, Text } from "react-native";

import Square from "./Square";

export default function Board(children) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 900,
      height: 900,
    },
  });