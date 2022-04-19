import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-eva-icons";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Text } from "../Themed";

const staticImage = require("../../data/dummy/product-image.jpeg");

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

interface Product {
    productId: number;
    name: string;
    subtitle: string;
    price: number;
    amount: number;
    imageUrl?: string;
}

const getPrice = (value: number, option: "price" | "decimal") => {
    const [price, decimal] = value.toString().split(".");
    return option === "price" ? price : decimal;
};

export default function ProductCard({ product }: { product: Product }) {
    const navigation = useNavigation<RouterProps>();

    return (
        <View style={styles.container}>
            <View>
                {product.imageUrl ? (
                    <Image style={styles.productImage} source={{uri: product.imageUrl}} />
                ) : (
                    <Image style={styles.productImage} source={staticImage} />
                )}

                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.subtitle}>{product.subtitle}</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Product', { product })}>
                    <Icon name="info-outline" fill="#999" width={24} height={24} />
                </TouchableOpacity>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{getPrice(product.price, "price")}.</Text>
                    <Text style={styles.priceDecimal}>{getPrice(product.price, "decimal")}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 2,
        minHeight: 240,
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#fff",
        backgroundColor: "#fff",
    },
    productImage: {
        resizeMode: "contain",
        width: "100%",
        height: 120,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        minHeight: 38,
    },
    subtitle: {
        fontSize: 14,
        color: "#6b6b6b",
    },
    footer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
    },
    priceDecimal: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 1,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
