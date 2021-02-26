import React from 'react';
import './cart.css'
const Cart = (props) => {
    const Cart =props.name;
    // const total =Cart.reduce((total,prd)=>total+prd.price,0);
    let total =0;
    for (let i = 0; i < Cart.length; i++) {
        const price = Cart[i];
        total=total+price.price;
    };
    let shopping=0;
    if (total>=50) {
        shopping=0;
    }if (total>25){
        shopping=4.50;
    }else if(total>0){
        shopping=7;
    }
    const tex=(shopping+total)*.10;
    const totalPrice=total+shopping+tex;
    return (
        <div className='linked'>
            <h4 className='card'>This is card</h4>
            <h4>Order summary :{props.name.length}</h4>
            <h4>Price:{(total.toFixed(2))}</h4>
            <h4>Shipping:{(shopping.toFixed(2))}</h4>
            <h4 className='borderis'>Tex 10% :{(tex.toFixed(2))}</h4>
            <h3>Total price:{totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;