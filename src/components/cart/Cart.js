import React from 'react';

const Cart = (props) => {
    
    const cart = props.cartInfo;
    const totalll = cart.reduce((total, item) => total + item.price, 0);

    /*
    let total = 0;
    props.cartInfo.forEach(item => {
        total += item.price;
    });
    */

    return (
        <div>
            <h3>Order Summary </h3>
            <h5> Price: ${totalll.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;