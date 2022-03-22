import { StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { Text, View } from '../components/Themed';
import ProductListItem from '../components/ProductListItem';
import { cartState } from "../App";

export default function CartScreen() {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <View style={styles.container}>
      {cart.map((item) => (
        <ProductListItem key={item.productId} product={item} />
      ))}

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
