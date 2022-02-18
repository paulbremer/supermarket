import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ProductCard from '../components/ProductCard';
import productData from '../data/dummy/product.json';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <ProductCard product={productData} />
        <ProductCard product={productData} />
        <ProductCard product={productData} />
        <ProductCard product={productData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    padding: 10
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#f1f1f1',
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
