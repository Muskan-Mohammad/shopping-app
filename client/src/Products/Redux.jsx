// import React, { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// export const shopContext = createContext(null);

// export const ShopContextProvider = (props) => {
//   const [products, setProducts] = useState([]);
//   const [items, setItems] = useState({});
 

//   useEffect(() => {
//     axios.get('http://localhost:3001/buyer').then(res => {
//       setProducts(res.data)
//     });
//   }, [])



//   const addToCart = (itemID) => {

//     setItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
//   };

//   const removeToCart = (itemID) => {

//     setItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
//   };

//   const cartCount = Object.keys(items);

//   const productsById = products.reduce((prev, curr)=> {
//     prev[curr.id] = curr;
//     return prev;
//   }, {})


//   const contextValue = { items, addToCart, removeToCart, cartCount, products, productsById };
 


//   return (
//     <shopContext.Provider value={contextValue}>
//       {props.children}
//     </shopContext.Provider>
//   );
// };


import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState(getDefaultCart(products)); // Initialize cart items

  useEffect(() => {
    axios.get('http://localhost:3001/buyer').then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addToCart = (itemID) => {
    setItems((prev) => {
      const updatedItems = { ...prev };
      updatedItems[itemID] = (updatedItems[itemID] || 0) + 1;
      return updatedItems;
    });
  };

  const removeToCart = (itemID) => {
    setItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemID] && updatedItems[itemID] > 0) {
        updatedItems[itemID] -= 1;
      }
      return updatedItems;
    });
  };

  const cartCount = Object.values(items).reduce((total, quantity) => total + quantity, 0);

    const productsById = products.reduce((prev, curr)=> {
    prev[curr.id] = curr;
    return prev;
  }, {})

  const contextValue = { items, addToCart, removeToCart, cartCount, products ,productsById};

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

function getDefaultCart(products) {
  const cart = {};
  products.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
}



