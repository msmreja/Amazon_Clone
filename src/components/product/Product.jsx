import React from 'react';
import './product.css'

const Product = ({title, price, rating, image}) => {
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
                    <p>⭐</p> 
                ))}
            </div>
            <img src={image}  alt='Amazon Alexa'/>

            <button>Add To Cart</button>
        </div>
    );
};

export default Product;