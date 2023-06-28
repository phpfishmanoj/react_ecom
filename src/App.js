import "./styles.css";
import Product from "./components/Product";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import CartContextProvider from "./context/cart";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const iphone = {
    id: 1,
    title: "Apple iPhone 13",
    price: "79,999",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
  };
  const samsung = {
    id: 2,
    title: "Samsung Galaxy Note 8",
    price: "69,999",
    image:
      "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas2/Black/Gallery-01-C2-Lockup-MysticBlack-1600x1200.jpg?$product-details-jpg"
  };
  const nokia = {
    id: 3,
    title: "Nokia 1100",
    price: "2,999",
    image: "https://m.media-amazon.com/images/I/41wGEmM0S4L.jpg"
  };
  const products = [iphone, samsung, nokia];

  return (
    <div>
      {/* <Product image={iphone.image} title={iphone.title} price={iphone.price}/>
      <Product image={samsung.image} title={samsung.title} price={samsung.price}/>
      <Product image={nokia.image} title={nokia.title} price={nokia.price}/> */}
      {/* {products.map((product) => (
        <Product
          title={product.title}
          image={product.image}
          price={product.price}
          key={product.title}
        />
      ))} */}
      {/* <p>state management - 1 + < /p>
      <p>useState </p>
      <p>Hooks are normal functions that let us hooks into component life cycle</p>
      <p>Lifecycle Born Grow/Updates Die</p>
      <p>Born - Mount/Rendered Update- update Die-Unmount</p> */}
      <Provider store={store}>
        <CartContextProvider>
          <Header
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <ProductList selectedCategory={selectedCategory} />
        </CartContextProvider>
      </Provider>
    </div>
  );
}
