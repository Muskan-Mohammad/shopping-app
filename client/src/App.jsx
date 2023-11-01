import { useState } from 'react';
import './App.css';
import SignUp from './SignUp';
import {Routes , Route} from 'react-router-dom';
import SignInSide from './SignIn';
import Home from './Home';
import Buyer from './Products/Buyer';
import CartPage from './Products/Cart';
import Checkout, { AddressForm, PaymentForm, Review } from './Products/Payment';
import AddItem from './Seller/addItem';
import Dashboards from './Seller/Dashboards';
import Mycart from './Seller/MyCart';
import Shipping from './Products/Shipping';
import Message from './Seller/Message';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Routes>
          <Route path="/" element={  <SignInSide />} />
          <Route path="/login" element={  <SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buyer" element={<Buyer/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<AddressForm />} />
        <Route path="/cardDetails" element={<PaymentForm />} />
        <Route path="/review" element={<Review />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sell" element={<Dashboards/>} />
        <Route path="/addItem" element={<AddItem/>} />
        <Route path="/mycart" element={<Mycart/>} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/chat" element={<Message/>} />
        </Routes>
      
       </div>
  )
}

export default App
