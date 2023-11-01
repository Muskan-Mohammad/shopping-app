import React, { useContext } from 'react';
import { shopContext } from './Redux';
import { CartItem } from './cart-item';

import { Button } from '@mui/material';
import './Buyer.css';

 export default function CartPage () {
  const { items, removeFromCart, productsById } = useContext(shopContext);

  const products = Object.keys(items).filter(key => items[key]).map(key => productsById[key]).filter(product => product);
  console.log(":: DATA ::", {products, items})
  const totalAmount = products.reduce((prev, curr) => prev + (+curr.newPrice * items[curr.id]), 0)
console.log("total amont" , totalAmount);


localStorage.setItem('datas', JSON.stringify(products));
localStorage.setItem('totalAmounts', totalAmount.toString());
const storedProducts = JSON.parse(localStorage.getItem('datas'));
const storedTotalAmount = parseFloat(localStorage.getItem('totalAmounts'));

  console.log('Stored products:', storedProducts);
  console.log('Stored totalAmount:', storedTotalAmount);
  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className="selected-cards-container">
        {products.map((product) => <CartItem key={product.id} {...product} />)}
      </div>
      {/* Add your total amount calculation logic here */}
      <p>Total Amount: ${totalAmount}</p>
      <Button href="/payment">Buy Now</Button>
    </div>
  );
};


