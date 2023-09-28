import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetalhesProd({ route }) {
  const { produto } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
      <View style={styles.infProduto}>
        <Text style={styles.nomeProduto}>{produto.nome}</Text>
        <Text style={styles.precoProduto}>Por apenas R${produto.preco.toFixed(2)} em até 10x sem juros.</Text>
        <Text style={styles.sobreProduto}><Text style={styles.fontBold}>Sobre:</Text> {produto.breve_descricao}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  imagemProduto: {
    width: '100%',
    height: '70%',
  },
  infProduto: {
    margin: 20,
    alignItems: 'center',
  },
  nomeProduto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  precoProduto: {
    fontSize: 20,
    textAlign: 'center',
  },
  sobreProduto: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  fontBold: {
    fontWeight: 'bold',
  },
});
