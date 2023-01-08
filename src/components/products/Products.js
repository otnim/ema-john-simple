import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Products = (props) => {
    const { name, img, price, stock } = props.prodInfo;
    return (
        <div className='box row'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3> {name} </h3>
                <h1> ${price} </h1>
                <p>Only {stock} items remaining - Order soon.</p>
                <br />

                <button onClick={() => props.handleButton(props.prodInfo)} className='add-cart-button'> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart </button>

            </div>
        </div>
    );
};

export default Products;