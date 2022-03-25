import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
interface Product {
    productId: number;
    name: string;
    subtitle: string;
    price: number;
    amount: number;
    imageUrl?: string;
}

const staticImage = require("../../data/dummy/product-image.jpeg");

const ProductListItem = ({ product }: { product: Product }) => {
    const colorScheme = useColorScheme();

    return (
        <View key={product.productId} style={styles.container}>
            <View style={styles.listItem}>
                <View style={styles.productAmount}>
                    <Text style={styles.productAmountText}>{product.amount}</Text>
                </View>
                <View>
                    {product.imageUrl ? (
                        <Image style={styles.productImage} source={{uri: product.imageUrl}} />
                    ) : (
                        <Image style={styles.productImage} source={staticImage} />
                    )}
                </View>
                <View style={styles.productTitle}>
                    <Text style={styles.productTitleText} ellipsizeMode='tail' numberOfLines={2}>{product.name}</Text>
                    <Text style={{ ...styles.productSubtitleText, color: Colors[colorScheme].tint}}>{product.subtitle}</Text>
                </View>
                <View style={styles.productPrice}>
                    <Text style={styles.productPriceText}>{(product.amount * product.price).toFixed(2)}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "#fff",
    },
    productAmount: {
        backgroundColor: '#292929',
        borderRadius: 8,
        justifyContent: 'center',
        margin: 6,
    },
    productAmountText: {
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    productImage: {
        resizeMode: "contain",
        width: 70,
        height: 56,
    },
    productTitle: {
        flexGrow: 2,
        maxWidth: '60%',
        justifyContent: 'flex-start'
    },
    productTitleText: {
        flexWrap: 'wrap',
    },
    productSubtitleText: {
        
    },
    productPrice: {
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    productPriceText: {
        fontWeight: "800"
    }
});

export default ProductListItem
