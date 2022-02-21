import { StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { Text, View } from '../components/Themed';
import { cartState } from "../App";

export default function CartScreen() {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <View style={styles.container}>
      {cart.map((item) => (
        <View key={item.productId}>
          <Text>{item.name}</Text>
          <Text>price: {item.price} amount: {item.amount}</Text>
        </View>
      ))}

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
