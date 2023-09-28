import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Avaliacoes({ route }) {
    const { produto } = route.params;
    const [avaliacoesDisp, setAvaliacoesDisp] = useState(true);

    useEffect(() => {
        if (produto.comentarios === undefined) {
            setAvaliacoesDisp(false);
        }
    }, [produto]);

    return (
        <View>
            <Text style={styles.nomeProduto}>Avaliações do {produto.nome}</Text>
            {avaliacoesDisp ? (
                produto.comentarios?.map((comentario, index) => (
                    <View key={index} style={styles.cardAvaliacoes}>
                        <Text style={styles.text}><Text style={styles.boldText}>Comprador:</Text> {comentario.nome_usuario}</Text>
                        <Text style={styles.text}><Text style={styles.boldText}>Data publicação:</Text> {comentario.data_publicacao}</Text>
                        <Text style={styles.text}><Text style={styles.boldText}>Comentário:</Text> {comentario.comentario}</Text>
                        <Text style={styles.text}><Text style={styles.boldText}>Nota:</Text> {comentario.nota}</Text>
                    </View>
                ))
            ) : (
                <Text style={styles.avaliacoesIndisp}>Não há avaliações disponíveis para esse produto.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    nomeProduto: {
        fontWeight: 'bold',
        fontSize: 22,
        padding: 5,
        paddingTop: 20,
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
