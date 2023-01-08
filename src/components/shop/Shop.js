import React, { useState, useEffect } from 'react';
import Cart from '../cart/Cart';
import Products from '../products/Products';
import './Shop.css';

const Shop = () => {
    const [prod, setProd] = useState([]);
    useEffect(() => {
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProd(data))
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddCartButton = (props) =>{
        const newCart = [...cart, props];
        setCart(newCart);
    }
     
    return (
        <div className='products'>
            <div className='product-area'>
                    {
                        prod.map(p => {
                            return (
                                <Products prodInfo={p} key={p.key} handleButton={handleAddCartButton}> </Products>
                            );
                        }).slice(0, 10)
                    }
            </div>

            <div className='cart-area'>
                <Cart cartInfo={cart}> </Cart>
            </div>


        </div>
    );
};

export default Shop;