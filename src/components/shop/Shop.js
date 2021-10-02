import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useFetch from "../../Hooks/useFetch";
import { saveItemLocalDb } from "../../utilities/localdb";
import Cart from "../cart/Cart";
import Product from "../products/Product";
import Search from "../search/Search";
import "./shop.css";

const Shop = () => {
  const [products, searched, setSearched] = useFetch();
  const [cart, setCart] = useCart(products);

  const addToCartHandler = (product) => {
    let exist = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exist) {
      const remaning = cart.filter((pd) => pd.key !== product.key);
      exist.quantity += 1;
      newCart =[...remaning, exist];
    } else {
      product.quantity = 1;
      newCart =[...cart, product];
    }
    setCart(newCart);
    saveItemLocalDb(product.key);
    console.log(cart);
  };

  const searchHandler = (e) => {
    const searchvalue = e.target.value.toLowerCase();
    const searchedProducts = products.filter((p) =>
      p.name.toLowerCase().includes(searchvalue)
    );
    setSearched(searchedProducts);
  };
  return (
    <>
      <Search searchHandler={searchHandler} />
      <div className="shop-container">
        <div className="product-container">
          {searched.map((product) => (
            <Product
              product={product}
              key={product.key}
              addToCartHandler={addToCartHandler}
            />
          ))}
        </div>
        <div className="card-contaier">
          <Cart cart={cart}>
            <Link to="order">
              <button className="btn-regular">Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
