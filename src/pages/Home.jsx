import { StyleSheet, Text, Platform, View, Card, Button } from 'react-native';

export default function Home({navigation}) {
    
    return (
        <View>
            <Text>Home</Text>
            <Button title="Eventos" onPress={() => navigation.navigate('Eventos')} />
            <Button title="Teste" onPress={() => navigation.navigate('Teste')} />
                        
        </View>
    )
}