import React from "react";
import "./cart.css";

const Cart = (props) => {
  // const total = cart.reduce((prevValue, cart) => prevValue + cart.price, 0);
  const { cart } = props;
  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    let newQuantity = product.quantity ? product.quantity : 1;
    total += product.price * newQuantity;
    totalQuantity += newQuantity;
  }
  // const totalProduct = cart.reduce((prev, cart) => prev + cart.quantity, 0);
  const tax = total * 0.1;
  const shipping = cart.length ? 10 : 0;
  const orderTotal = total + tax + shipping;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <h4>Item Ordered: {totalQuantity} </h4>
      <h5>Items: {total.toFixed(2)}$</h5>
      <h5>Tax: {tax.toFixed(2)}$</h5>
      <h5>Shipping: {shipping}$</h5>
      <h2 style={{ color: "goldenrod" }}>
        Order Total: ${orderTotal.toFixed(2)}
      </h2>
      {props.children}
    </div>
  );
};

export default Cart;
