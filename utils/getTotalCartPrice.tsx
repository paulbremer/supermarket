interface Product {
    productId: number;
    name: string;
    subtitle: string;
    price: number;
    amount: number;
    image?: string;
}

const getTotalCartPrice = (cart: Product[]) => {
    const prices = cart.map((product) => {
      return product.amount * product.price;
    })
    const reducer = (total: number, currentValue: number) => total + currentValue;
    return prices.length === 0 ? 0 : prices.reduce(reducer).toFixed(2)
}

export default getTotalCartPrice
