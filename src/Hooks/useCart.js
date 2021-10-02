import { useEffect, useState } from "react";
import { getFromLocalDb } from "../utilities/localdb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  const FindItemLocalDb = (db) => {
    let localCart = [];
    if (products.length) {
      for (const key in db) {
        let cart = products.find((i) => i.key === key);
        if (cart) {
          cart["quantity"] = db[key];
          localCart.push(cart);
        }
      }
    }
    setCart(localCart);
  };
  useEffect(() => {
    let localDb = getFromLocalDb();
    FindItemLocalDb(localDb);
    // eslint-disable-next-line
  }, [products]);
  return [cart, setCart, FindItemLocalDb];
};

export default useCart;
