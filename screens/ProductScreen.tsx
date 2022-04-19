import { StyleSheet } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { Text, View } from "../components/Themed";

export default function ProductScreen({ route }: RouteProp) {
    const { product } = route.params;

    console.log(product);

    return (
        <View style={styles.container}>
            <Text>{product.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
});
