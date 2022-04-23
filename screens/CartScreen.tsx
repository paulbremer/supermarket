import { FlatList, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import { Text, View } from "../components/Themed";
import CustomButton from "../components/CustomButton";
import ProductListItem from "../components/ProductListItem";
import { cartState } from "../App";
import getTotalCartPrice from "../utils/getTotalCartPrice";

export default function CartScreen() {
    const [cart, setCart] = useRecoilState(cartState);

    const FooterList = () => {
        return (
            <View>
                <View style={styles.footerList}>
                    <Text style={styles.footerListText}>Totaal</Text>
                    <Text style={styles.footerListText}>{getTotalCartPrice(cart)}</Text>
                </View>
                <View style={styles.footerButtonContainer}>
                    <CustomButton onPress={() => setCart([])} title="Bestellen" />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {cart.length === 0 ? (
                <View style={styles.emptyTextContainer}>
                    <Text style={styles.emptyText}>Je winkelmandje is leeg.</Text>
                </View>
            ) : (
                <FlatList
                    data={cart}
                    renderItem={({ item }) => <ProductListItem key={item.productId} product={item} />}
                    keyExtractor={(item) => item.name}
                    ListFooterComponent={FooterList}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
    footerButtonContainer: {
        paddingHorizontal: 12,
        marginTop: 24
    },
    emptyTextContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    emptyText: {
        fontSize: 20,
        fontWeight: "600",
    }
});
