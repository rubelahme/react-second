import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './shop.css';
const Shop = () => {
    const frist10 =fakeData.slice(0,15);
    const [products,setProducts]=useState(frist10);
    const [cart ,setCart] = useState([]);

    const buttonProduct = (product) =>{
        const newCart =[...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                products.map(pro => <Product name={pro} key={pro.key} buttonPro={buttonProduct} ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart name ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;