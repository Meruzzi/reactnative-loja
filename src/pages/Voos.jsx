import { Text, View } from "react-native";

export default function Voos({ route }) {
    const { evento } = route.params;

    const voos = evento.get("voos");

    return (
        <View>
            {voos.map((voo, index) => {
                return (
                    <View key={index}>
                        <Text>{voo.saida}</Text>
                    </View>
                );
            })}
        </View>
    );
}