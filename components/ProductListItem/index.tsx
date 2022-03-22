import { View, Text, StyleSheet } from 'react-native';

interface Product {
    productId: number;
    name: string;
    subtitle: string;
    price: number;
    amount: number;
    imageUrl?: string;
}

const ProductListItem = ({ product }: { product: Product }) => {
    return (
        <View key={product.productId} style={styles.container}>
            <View style={styles.listItem}>
                <Text>{product.name}</Text>
                <Text>Amount: {product.amount}</Text>
                <Text>Price: {product.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start'
    },
    listItem: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#fff",
        backgroundColor: "#fff",
    }
});

export default ProductListItem
