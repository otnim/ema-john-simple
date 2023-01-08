import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="ema-john" />
            <nav>
                <a href="/shop"> Shop </a>
                <a href="/review"> Order Review </a>
                <a href="/manage"> Manage Inventory </a>
            </nav>
            <div className="search-area">
                <input type="search" className="input-box" placeholder="Search" />
            </div>
        </div>
    );
};

export default Header;