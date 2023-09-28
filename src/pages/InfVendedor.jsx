import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function InfVendedor({ route }) {
    const { produto } = route.params;
    return (
        <View style={{paddingTop: 20}}>
            <Text style={styles.nomeProduto}>Avaliações do vendedor {produto.vendedor.nome}</Text>
            <View style={styles.cardAvaliacoes}>
                <Text style={styles.text}><Text style={styles.boldText}>Vendedor:</Text> {produto.vendedor.nome}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>Telefone</Text> {produto.vendedor.telefone}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>E-mail:</Text> {produto.vendedor.email}</Text>
                <Text style={styles.text}><Text style={styles.boldText}>Nota:</Text> {produto.vendedor.nota}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nomeProduto: {
        fontWeight: 'bold',
        fontSize: 22,
        padding: 5,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
    },
    boldText: {
        fontWeight: 'bold',
    },
    cardAvaliacoes: {
        padding: 10,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    avaliacoesIndisp: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    }
});
