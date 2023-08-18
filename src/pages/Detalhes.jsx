import { View, Text } from "react-native";

export default function Detalhes({ route }) {
const {nomeEvento} = route.params
  return (
    <View>
      <Text>{ nomeEvento }</Text>
    </View>
  )
}