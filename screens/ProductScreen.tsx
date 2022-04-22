import { Pressable, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { Text, View } from "../components/Themed";
import ProductPrice from "../components/ProductPrice";
import { cartState } from "../App";

const staticImage = require("../data/dummy/product-image.jpeg");

const truncate = (string: string, number: number) => {
    if (string.length <= number) { return string }
    return string.slice(0, number) + '...'
}

export default function ProductScreen({ route, navigation }: RouteProp) {
    const { product } = route.params;
    const [cart, setCart] = useRecoilState(cartState);
    const updatedProduct = cart.find(cartProduct => cartProduct.productId === product.productId);

    navigation.setOptions({ title: truncate(product.name, 32) });

    const onProductPress = (item: Product) => {
        if (cart.find((product) => product.productId === item.productId)) {
          const productIndex = cart.findIndex(product => product.productId === item.productId);
          const productAmount = cart[productIndex].amount;
          setCart([...cart.filter((product) => product.productId !== item.productId), {...item, amount: productAmount + 1}]);
        } else {
          setCart([...cart, { ...item, amount: 1 }]);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.productImageContainer}>
                {product.imageUrl ? (
                    <Image style={styles.productImage} source={{ uri: product.imageUrl }} />
                ) : (
                    <Image style={styles.productImage} source={staticImage} />
                )}
                {updatedProduct?.amount > 0 && (
                    <View style={styles.amountTextContainer}>
                        <Text style={styles.amountText}>{updatedProduct?.amount}</Text>
                    </View>
                )}
            </View>
            <View style={styles.productInfoContainer}>
                <Text style={styles.productTitle}>{product.name}</Text>
                <Text style={styles.productSubtitle}>{product.subtitle}</Text>

                <ProductPrice price={product.price} fontSize={32} />

                <Pressable onPress={() => onProductPress(product)} style={styles.button}>
                    <Text style={styles.buttonText}>Toevoegen</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productImageContainer: {
        width: "100%",
        height: "40%",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    productImage: {
        resizeMode: "contain",
        height: "100%",
    },
    amountTextContainer: {
        position: "absolute",
        top: "90%",
        left: 12,
        backgroundColor: "#1d1d1d",
        borderRadius: 4,
        paddingHorizontal: 4,
        alignSelf: "flex-start"
    },
    amountText: {
        color: "#fff",
        fontSize: 14,
    },
    productInfoContainer: {
        padding: 10,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 4,
    },
    productSubtitle: {
        fontSize: 18,
        marginBottom: 16,
    },
    button: {
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});
