import React from 'react';
import logo from "../../images/logo.png";
import './header.css';
const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt=""/>
                <nav>
                    <a href="/Shop">Shop</a>
                    <a href="/Order">Order</a>
                    <a href="/Manage">Manage</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;