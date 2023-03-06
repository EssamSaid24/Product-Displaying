import React from 'react';
import  './Products.css'
// recieve data in div and export it to product list 
const Products = (props) => {
    return (
        <div className='card' >
        <h1>{props.product.title}</h1>
        <img className='img' src={props.product.image} alt='' ></img>
        <p>{props.product.description}</p>
        <h3> The price is {props.product.price}</h3>
        </div>

    );
}

export default Products;
