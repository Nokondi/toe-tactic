import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

export default function WinBox({ isVisible, winner }) {
return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
            <Text style={styles.winText}>{winner} WINS!</Text>
        </View>
    </Modal>
);
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '25%',
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    },
    winText: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'sans-serif',
    },
});
  