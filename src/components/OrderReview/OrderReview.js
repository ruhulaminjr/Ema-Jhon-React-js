import { useHistory } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useFetch from "../../Hooks/useFetch";
import { ClearLocalDb, RemoveFromDb } from "../../utilities/localdb";
import Cart from "../cart/Cart";
import OrderItem from "./OrderItem";

const OrderReview = () => {
  const [products] = useFetch();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const RemoveItemHandler = (item) => {
    const newItem = cart.filter((pd) => pd.key !== item.key);
    setCart(newItem);
    RemoveFromDb(item.key);
  };
  const placeOrderHandler = () => {
    history.push("/orderdone");
    setCart([]);
    ClearLocalDb();
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Place Your Order</h1>
      <div className="shop-container">
        <div className="product-container">
          {cart.map((pd) => (
            <OrderItem
              product={pd}
              RemoveCartHandler={RemoveItemHandler}
              key={pd.key}
            />
          ))}
        </div>
        <div className="card-contaier">
          <Cart cart={cart}>
            <button className="btn-regular" onClick={placeOrderHandler}>
              Place Order
            </button>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default OrderReview;
