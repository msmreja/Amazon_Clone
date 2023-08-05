import React from 'react';
import { useStateValue } from '../contextApi/StateProvider';
import { getCartTotal } from '../contextApi/Reducer'

const Subtotal = () => {
    const [ {basket}, dispatch] = useStateValue();

    console.log("This is From Cart Pge"+ getCartTotal(basket));

    return (
        <div className='Subtotal__container'>
            <span>Subtotal( O items ): 
                <strong> {getCartTotal(basket)}</strong>
            </span>
            <small className='subtotal__gift'>
                <input type="checkbox" /> This Order contains a Gift
                </small>
            <button>Procced to Checkout</button>  
        </div>
    );
};

export default Subtotal;