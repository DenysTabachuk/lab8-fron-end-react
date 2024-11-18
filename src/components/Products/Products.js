import { useState } from "react";
import Product from "./Product"
import products from "../../data/products"
import "./Products.css"


export default function Products(){
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    const goToNextProduct = () => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }

    const goToPrevProduct = () => {
        setCurrentProductIndex((prevIndex) =>
          prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
      };

    return (
       <div id="products">
        <div id="products-header-and-button-container">
                <div>
                    <h3 className="yellow-spaced-header">OUR PRODUCTS</h3>
                    <h2 className="spaced-bigger-header">LOCKSMITH STORE</h2>
                    <hr className="lefted-hr"/>
                </div>

                <button id = "view-all-button"><b>VIEW ALL</b></button>
            </div>

  
            <div id="product-container">
                {products.map( (product) =>    <Product productObj={product} key={product.name}></Product> )}
            </div>

          
            <div id="product-slider">
                <button className="half-circle-right" onClick={goToPrevProduct}><b> &lt; </b></button>
                <Product productObj={products[currentProductIndex]}></Product>
                <button className="half-circle-left" onClick={goToNextProduct}> &gt; </button>
            </div>
       </div>
    );
}