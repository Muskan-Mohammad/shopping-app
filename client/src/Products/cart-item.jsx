import React, { useContext , useEffect } from "react";
import { shopContext } from "./Redux";
import { Card } from "./Buyer";
import './Buyer.css';
import axios from "axios";

export const CartItem = ({ id, imgs, title, reviews, prevPrice, newPrice }) => {
    const { items, addToCart, removeFromCart, updateCartItemCount, setItems } = useContext(shopContext);
   
    return (
      <div className="cartItem" style={{ marginBottom: '20px' }}>
        <img src={imgs} alt={title} style={{ height: '200px', width: '500px' }} />
        <div className="description">
          <p>
            <b>{title}</b>
          </p>
          <p>Price: ${newPrice}</p>
          <p>Reviews: {reviews}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={items[id]}
              onChange={(e) => updateCartItemCount(id, Number(e.target.value))}
            />
            <button onClick={() => addToCart(id)}> + </button>
          </div>
        </div>
      </div>
    );
  };
  