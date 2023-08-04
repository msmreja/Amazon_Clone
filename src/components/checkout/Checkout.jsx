import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {
    return (
        <div>
            <div className="checkout__container">
                <div className="checkout__left">
                    <img src='http://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon._CB423493668_.jpg' />
                <div className="checkout__title">
                </div>
                    <h2>Your Cart</h2>
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>

            </div>
        </div>
    );
};

export default Checkout;