import React, { useContext, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import '../Products/Buyer.css';
import { shopContext } from "../Products/Redux";

const Products = ({ result }) => {
    return (
      <>
        <section style={{display:'flex' , flexWrap:'wrap' , marginLeft: '10rem'
   , marginTop: '-27rem' ,
    zIndex: -2}} >{result}</section>
      </>
    );
  };
 
   export const Card = ({ id,imgs, title, reviews, prevPrice, newPrice }) => {
    const [quantity, setQuantity] = useState(0);
     
  const { addToCart, removeToCart, items } = useContext(shopContext);
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
           
          </div>
          </div>
        </section>
      </>
    );
  };

function Seller() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [products, setProducts] = useState([]);
  const { addToCart, removeToCart, items  ,products } = useContext(shopContext);
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
      <Products result={result} />
    </>
  );
}

export default Seller;