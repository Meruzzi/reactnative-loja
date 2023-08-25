import { StyleSheet, Text, Platform, View, Card, Button } from 'react-native';

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Text>Olá</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})