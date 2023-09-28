import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SpecSproduto({ route }) {
    const { produto } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.nomeProduto}>{produto.nome}</Text>
            <Text style={styles.descricao}>{produto.descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 5,
        paddingTop: 20,
        alignItems: "center",
    },
    nomeProduto: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
    },
    descricao: {
        fontSize: 18,
        textAlign: "center",
        lineHeight: 24,
    },
});
