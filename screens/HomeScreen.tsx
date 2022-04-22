import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { View } from '../components/Themed';
import ProductCard from '../components/ProductCard';
import { cartState } from "../App";

export default function HomeScreen() {
  const [cart, setCart] = useRecoilState(cartState);
  const [products, setProducts] = useState<Array<Product>>([]);

  const getProductsFromCMS = async () => {
    try {
      const response = await fetch('https://simplejsoncms.com/api/1yw8dxjfcjj');
      const json = await response.json();
      setProducts(json.products);
      return json.products;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      getProductsFromCMS();
    }
  }, []);

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
    <SafeAreaView style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onProductPress(item)} style={styles.product}>
              <ProductCard product={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.productContainer}
          horizontal={false}
          numColumns={2}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  productContainer: {
    backgroundColor: '#f1f1f1',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20
  },
  product: {
    width: '50%',
    padding: 2,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
