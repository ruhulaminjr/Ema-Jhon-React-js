import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const OrderItem = ({ product, RemoveCartHandler }) => {
  const { img, name, price, seller, stock, star,quantity } = product;
  const buyIcon = <FontAwesomeIcon icon={faShoppingCart} color="gray" />;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-title">{name}</h3>
        <p>
          <small>By: </small>
          {seller}
        </p>
        <h4>${price}</h4>
        <Rating
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          initialRating={star}
          readonly
        />
        <p>Item Quantity : {quantity}</p>
        <p>
          <small>only </small> {stock} <small>left in stock - order soon</small>
        </p>
        <button
          className="btn-regular"
          onClick={() => RemoveCartHandler(product)}
        >
          {buyIcon} Remove
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
