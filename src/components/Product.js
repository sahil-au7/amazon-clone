import React from "react";
import "./product.css";

const Product = ({ id, price, rating, title, image }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>​⭐​</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
