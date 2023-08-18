import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default function Eventos({navigation}) {
  return (
    <View>
        <View>
        <Button title="Evento a" onPress={()=> navigation.navigate("Detalhes", {nomeEvento: 'Evento A'})}/>
        <Button title="Evento b" onPress={()=> navigation.navigate("Detalhes")}/>   
        <Button title="Evento c" onPress={()=> navigation.navigate("Detalhes")}/>
        </View>
    </View>
  );
}