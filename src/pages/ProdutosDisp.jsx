import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Inicio({ navigation }) {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://mocki.io/v1/73ac5ec3-c322-4b76-89a7-7cfdc575695a')
            .then(response => response.json())
            .then(data => {
                setProdutos(data.produtos);
                setIsLoading(false);
            });
    }, []);

    return (
        <ScrollView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" style={styles.loader} />
            ) : (
                produtos.map((produto, index) => (
                    <TouchableOpacity
                        style={styles.cardProduto}
                        key={index}
                        onPress={() => navigation.navigate('Produto', { produto })}
                    >
                        <Image
                            source={{ uri: produto.imagem }}
                            style={styles.imagemProduto}
                        />
                        <View style={styles.infProduto}>
                            <Text style={styles.nomeProduto}>{produto.nome}</Text>
                            <Text style={styles.precoProduto}>
                                Por apenas <Text style={styles.precoDestacado}>R${produto.preco}</Text> à vista.
                            </Text>
                            <Text style={styles.saibaMais}>Clique e saiba mais.</Text>
                        </View>
                    </TouchableOpacity>
                ))
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardProduto: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    imagemProduto: {
        width: '100%',
        height: 300,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    infProduto: {
        padding: 10,
    },
    nomeProduto: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    precoProduto: {
        fontSize: 15,
        marginTop: 5,
    },
    precoDestacado: {
        fontWeight: 'bold',
    },
    saibaMais: {
        fontSize: 11,
        color: '#007bff'
    },
});
