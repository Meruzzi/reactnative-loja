import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, Platform, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import axios from '../../axios.js'
import { StackActions } from '@react-navigation/native';
import Detalhes from 'Detalhes'

export default function App() {

  const [eventos, setEventos] = useState([])
  useEffect(() => {
    axios
      .get("/eventos.json")
      .then(res => {
          const list = axios
          .converter(res.data)
          setEventos(list)
    }, [])
  })

  return (
    <View style={styles.container}>
      {eventos.map((evento, index) => (
        <View key={index}>
            <Image source={{ uri: `${evento.imagens}`}} style={styles.img} />
            <View style={styles.cardInfEvento}>
              <Text style={styles.tituloEvento}>{evento.nome}</Text>
              <Text>{evento.descricao}</Text>
              <Text>{evento.local}</Text>
            </View>
              <Stack.Screen name="Detalhes" component={Detalhes} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  },
  img: {
    width: '100vw',
    height: 150
  },
  cardInfEvento: {
    backgroundColor: '#E0D0C1',
    color: 'white'
  },
  tituloEvento: {
    fontSize: 20
  }
});
