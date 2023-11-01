import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState({});
 

  useEffect(() => {
    axios.get('http://localhost:3001/buyer').then(res => {
      setProducts(res.data)
    });
  }, [])



  const addToCart = (itemID) => {

    setItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeToCart = (itemID) => {

    setItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const cartCount = Object.keys(items);

  const productsById = products.reduce((prev, curr)=> {
    prev[curr.id] = curr;
    return prev;
  }, {})


  const contextValue = { items, addToCart, removeToCart, cartCount, products, productsById };
 


  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};





