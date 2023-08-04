import React from 'react';
import './product.css';
import { useStateValue } from '../contextApi/StateProvider';
import { Button } from 'antd';

const Product = ({ id, title, price, rating, image }) => {
    const [{basket}, dispatch] = useStateValue();


    const addToCart = () => {
        console.log('Called');
        dispatch ({
            type: 'ADD_TO_CART',
            item:{
                id: id,
                title: title,
                image: image,
                price : price,
                rating : rating,
            },

        })
    }
    
    return (
        <div className='product__container'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>   
            </div>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p key={i}>⭐</p> 
                ))}
            </div>
            <img src={image}  alt='Amazon Alexa'/>
            <Button onClick={addToCart}> Add To Cart</Button>  
        </div>
    );
};

export default Product;