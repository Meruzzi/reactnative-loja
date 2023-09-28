import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function Sobre() {
    // Função para abrir o link para o GitHub
    const abrirGitHub = () => {
        const urlGitHub = "https://github.com/Meruzzi";
        Linking.openURL(urlGitHub);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.resumo}>
                Bem-vindo à Minha Loja! Somos uma plataforma online que oferece uma
                variedade de produtos de alta qualidade. Nosso objetivo é fornecer a
                melhor experiência de compras para nossos clientes.
            </Text>
            <Text style={styles.feitoPor}>
                Feito por: Gabriel Meruzzi
            </Text>
            <TouchableOpacity onPress={abrirGitHub} style={styles.githubLink}>
                <Text style={styles.linkText}>Visite o meu GitHub</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
    },
    resumo: {
        fontSize: 18,
        textAlign: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    feitoPor: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    githubLink: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    linkText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
