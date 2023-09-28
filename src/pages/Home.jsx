import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://img.freepik.com/vetores-gratis/desenho-de-carrinho-e-construcao-de-loja_138676-2085.jpg?w=2000" }}
                style={styles.logo}
            />
            <Text style={styles.nomeLoja}>Lojinha</Text>
            <Text style={styles.desc}>
                Seja bem vindo a minha Loja, aqui você encontra produtos diversos com um preço imbatível!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    nomeLoja: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    desc: {
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 20,
    },
});
