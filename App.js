import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Platform, View, Card } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Eventos from './src/pages/Eventos';
import Teste from './src/pages/Teste';
import Detalhes from './src/pages/Detalhes';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Eventos' component={Eventos} />
        <Stack.Screen name='Teste' component={Teste} />
        <Stack.Screen name='Detalhes' component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

