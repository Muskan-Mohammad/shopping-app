import React, { useContext, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import './Buyer.css';
import { shopContext } from "./Redux";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";


const Nav = ({ handleInputChange, query }) => {
 
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <Tooltip title="My Cart" arrow>
        <Link to="/cart">         
          <AiOutlineShoppingCart className="nav-icons" />  
        </Link>
        </Tooltip>
        <Tooltip title="Log Out" arrow>
        <a href="/">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
        </Tooltip>
        <Tooltip title="Shipping Details" arrow>
        <a href="/shipping">
          <FaShippingFast className="nav-icons" />
        </a>
        </Tooltip>
      </div>
    </nav>
  );
};
const Products = ({ result }) => {
    return (
      <>
        <section className="card-container">{result}</section>
      </>
    );
  };
  const Recommended = ({ handleClick }) => {
    return (
      <>
        <div>
          <h2 className="recommended-title">Recommended</h2>
          <div className="recommended-flex">
            <Button onClickHandler={handleClick} value="" title="All Products" />
            <Button onClickHandler={handleClick} value="Nike" title="Nike" />
            <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
            <Button onClickHandler={handleClick} value="Puma" title="Puma" />
            <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          </div>
        </div>
      </>
    );
  }; 

  const Sidebar = ({ handleChange }) => {
    return (
      <>
        <section className="sidebar">
          <div className="logo-container">
            <h1>🛒</h1>
          </div>
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
        </section>
      </>
    );
  };
  const Price = ({ handleChange }) => {
    return (
      <>
        <div className="ml">
          <h2 className="sidebar-title price-title">Price</h2>
  
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>
  
          <Input
            handleChange={handleChange}
            value={50}
            title="$0 - 50"
            name="test2"
          />
  
          <Input
            handleChange={handleChange}
            value={100}
            title="$50 - $100"
            name="test2"
          />
  
          <Input
            handleChange={handleChange}
            value={150}
            title="$100 - $150"
            name="test2"
          />
  
          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
          />
        </div>
      </>
    );
  };
  function Category({ handleChange }) {
    return (
      <div>
        <h2 className="sidebar-title">Category</h2>
  
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
        </div>
      </div>
    );
  }
  const Button = ({ onClickHandler, value, title }) => {
    return (
      <button onClick={onClickHandler} value={value} className="btns">
        {title}
      </button>
    );
  };

   export const Card = ({ id,imgs, title, reviews, prevPrice, newPrice }) => {
    const [quantity, setQuantity] = useState(0);
     
  const { addToCart, removeToCart, items, products } = useContext(shopContext);
  const cartItemAmount = items[id];
    return (
      <>
        <section className="card">
          <img src={imgs} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
             
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
                <BsFillBagFill className="bag-icon" />
              </div>
            </section>
            <div className="card-cart">
            <button onClick={()=> addToCart(id)}>Add To Cart </button>
            <div className="quantity-controls">
              <button onClick={() => removeToCart(id)}>-</button>
              <span className="quantity">{cartItemAmount}</span>
              <button onClick={() => addToCart(id)}>+</button>
            </div>
          </div>
          </div>
        </section>
      </>
    );
  };

  const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
      
function Buyer() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {  products } = useContext(shopContext);

  // const [products, setProducts] = useState([]);
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ imgs, title, reviews, prevPrice, newPrice ,id}) => (
        <Card
          key={Math.random()}
          imgs={imgs}
          title={title}
          id={id}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Buyer;