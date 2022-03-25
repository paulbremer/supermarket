import { FlatList, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import { Text, View } from "../components/Themed";
import ProductListItem from "../components/ProductListItem";
import { cartState } from "../App";
import getTotalCartPrice from "../utils/getTotalCartPrice";

export default function CartScreen() {
    const [cart, setCart] = useRecoilState(cartState);

    const FooterList = () => {
        return (
            <View style={styles.footerList}>
                <Text style={styles.footerListText}>Totaal</Text>
                <Text style={styles.footerListText}>{getTotalCartPrice(cart)}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => <ProductListItem key={item.productId} product={item} />}
                keyExtractor={(item) => item.name}
                ListFooterComponent={FooterList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    footerList: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footerListText: {
        fontWeight: "600",
        fontSize: 18
    },
});
