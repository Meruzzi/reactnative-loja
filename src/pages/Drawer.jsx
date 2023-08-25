import { StyleSheet, Text, Platform, View, Card, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from './Inicio';
import Eventos from './Eventos';
import About from './About';

const Drawer = createDrawerNavigator();

export default function Home({ navigation }) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Inicio} />
            <Drawer.Screen name="Eventos" component={Eventos} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}