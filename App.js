import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdutosDisp from './src/pages/ProdutosDisp'
import DetalhesProd from './src/pages/DetalhesProd.jsx'
import SpecsProduto from './src/pages/SpecsProduto'
import InfVendedor from './src/pages/InfVendedor'
import Avaliacoes from './src/pages/Avaliacoes'
import Perguntas from './src/pages/Perguntas'
import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function EventosBottomNavigation({ route }) {
  const { produto } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="DetalhesProd" component={DetalhesProd} options={{ headerShown: false, title: 'Detalhes' }} initialParams={{ produto: produto }} />
      <Tab.Screen name="SpecsProduto" component={SpecsProduto} options={{ headerShown: false, title: 'Especificações' }} initialParams={{ produto: produto }} />
      <Tab.Screen name="InfVendedor" component={InfVendedor} options={{ headerShown: false, title: 'Vendedor' }} initialParams={{ produto: produto }} />
      <Tab.Screen name="Avaliacoes" component={Avaliacoes} options={{ headerShown: false, title: 'Avaliações' }} initialParams={{ produto: produto }} />
      <Tab.Screen name="Perguntas" component={Perguntas} options={{ headerShown: false }} initialParams={{ produto: produto }} />
    </Tab.Navigator>
  )
}

function EventosStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProdutosDisp" options={{ headerShown: false }} component={ProdutosDisp} />
      <Stack.Screen name="Produto" options={{ headerShown: false }} component={EventosBottomNavigation} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Produtos" component={EventosStackScreen} />
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

