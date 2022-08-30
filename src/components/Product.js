import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const { user } = state;

  const navigate = useNavigate();

  const addToBasket = () => {
    // dispatch the item into the data layer
    if (!user) {
      navigate("/login");
      return;
    }
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

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
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
