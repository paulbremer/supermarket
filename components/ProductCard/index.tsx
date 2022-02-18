import { Image, StyleSheet, View } from 'react-native';
import { Text } from '../Themed';
import { Icon } from 'react-native-eva-icons';

const staticImage = require('../../data/dummy/product-image.jpeg');

interface Product {
  title: string;
  subtitle: string;
  price: number;
  image?: string;
}

const getPrice = (value: number, option: 'price' | 'decimal') => {
  const [price, decimal] = value.toString().split('.')
  return option === 'price' ? price : decimal
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Image
                style={styles.productImage}
                source={staticImage}
                />

            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.subtitle}>{product.subtitle}</Text>
            
            <View style={styles.footer}>
              <Icon name="info-outline" fill="#999" width={24} height={24} />
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{getPrice(product.price, 'price')}.</Text>
                <Text style={styles.priceDecimal}>{getPrice(product.price, 'decimal')}</Text>
              </View>
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 2,
  },
  wrapper: {
    padding: 10,
    margin: 2,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#fff',
    backgroundColor: '#fff'
  },
  productImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 120,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b6b6b'
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  priceDecimal: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 1
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
