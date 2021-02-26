import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    const {name,img,price,category,shipping,seller,stock,wholePrice} =props.name;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div className='product-saidBer'>
                <h4>{name}</h4> 
                <p><small>by: <span>{seller}</span></small></p>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <button className='button-add' onClick={()=>props.buttonPro(props.name)} > <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;