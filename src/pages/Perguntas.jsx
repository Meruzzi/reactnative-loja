import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Perguntas({ route }) {
    const { produto } = route.params;
    const [perguntas, setPerguntas] = useState(true);

    useEffect(() => {
        if (produto.perguntas === undefined) {
            setPerguntas(false);
        }
    }, [produto]);

    return (
        <View>
            <Text style={styles.nomeProduto}>Perguntas sobre o {produto.nome}</Text>
            {perguntas ? (
                produto.perguntas?.map((pergunta, index) => (
                    <View key={index} style={styles.cardPerguntas}>
                        <Text style={styles.text}><Text style={styles.boldText}>Usuário:</Text> {pergunta.nome_usuario}</Text>
                        <Text style={styles.text}><Text style={styles.boldText}>Data publicação:</Text> {pergunta.data_publicacao}</Text>
                        <Text style={styles.text}><Text style={styles.boldText}>Pergunta:</Text> {pergunta.duvida_usuario}</Text>
                        <Text style={styles.text}><Text style={styles.boldText}>Resposta:</Text> {pergunta.resposta_vendedor}</Text>
                    </View>
                ))
            ) : (
                <Text style={styles.perguntasIndisp}>Não há perguntas sobre esse produto.</Text>
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
    cardPerguntas: {
        padding: 10,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    perguntasIndisp: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    }
});
