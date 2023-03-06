import React from 'react';
import productsData from '../products-data';
import Products from './Products';
import './ProductsList.css'




const ProductsList = () => {
    //that return the products that shown in website
    const products = productsData.map((product) => { 
        return(
        
        <Products key={product.id} product = {product}></Products>
        

        )

        
    })
    return (
        <div className='row'>
            {products}
        </div>
    );
}

export default ProductsList;
