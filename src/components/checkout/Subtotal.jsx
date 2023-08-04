import React from 'react';

const Subtotal = () => {
    return (
        <div className='Subtotal__container'>
            <span>Subtotal( O items ): 
                <strong> 0</strong>
            </span>
            <small className='subtotal__gift'>
                <input type="checkbox" /> This Order contains a Gift
                </small>
            <button>Procced to Checkout</button>  
        </div>
    );
};

export default Subtotal;