import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-eva-icons";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useRecoilState } from "recoil";
import { Text } from "../Themed";
import ProductPrice from '../ProductPrice';
import { cartState } from "../../App";

const staticImage = require("../../data/dummy/product-image.jpeg");

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

export default function ProductCard({ product }: { product: Product }) {
    const navigation = useNavigation<RouterProps>();
    const [cart, setCart] = useRecoilState(cartState);
    const updatedProduct = cart.find(cartProduct => cartProduct.productId === product.productId);

    return (
        <View style={styles.container}>
            <View>
                {product.imageUrl ? (
                    <Image style={styles.productImage} source={{uri: product.imageUrl}} />
                ) : (
                    <Image style={styles.productImage} source={staticImage} />
                )}
                {updatedProduct?.amount > 0 && (
                    <View style={styles.amountTextContainer}>
                        <Text style={styles.amountText}>{updatedProduct?.amount}</Text>
                    </View>
                )}

                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.subtitle}>{product.subtitle}</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Product', { product })}>
                    <Icon name="info-outline" fill="#999" width={24} height={24} />
                </TouchableOpacity>
                <ProductPrice price={product.price} />
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
    amountTextContainer: {
        position: "absolute",
        top: 100,
        backgroundColor: "#1d1d1d",
        borderRadius: 4,
        paddingHorizontal: 4,
        alignSelf: "flex-start"
    },
    amountText: {
        color: "#fff",
        fontSize: 14,
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
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
