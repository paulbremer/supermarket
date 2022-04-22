import { View, Text, StyleSheet } from "react-native";

const getPrice = (value: number, option: "price" | "decimal") => {
    const [price, decimal] = value.toString().split(".");
    return option === "price" ? price : decimal;
};

const ProductPrice = ({ price, fontSize }: { price: number, fontSize?: number }) => {
    return (
        <View style={styles.priceContainer}>
            <Text style={[styles.price, { fontSize: fontSize ? fontSize : 20 }]}>{getPrice(price, "price")}.</Text>
            <Text style={styles.priceDecimal}>{getPrice(price, "decimal")}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default ProductPrice;
