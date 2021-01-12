import React from "react";
import { useStateValue } from "../store/StateProvider";
import "./checkoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>₹{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>​⭐​</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove form basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
