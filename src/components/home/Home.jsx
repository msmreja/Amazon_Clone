 import React from 'react';
 import './home.css'
 import BackgroudSlide1 from '../../assets/homeBackground.jpg';
 import Product from '../product/Product';
 import productImg1 from '../../assets/Alexa.jpg';
 import {TopSelling, LikedProducts, LastSeen} from '../Data/Data';


 const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__img'src={BackgroudSlide1} alt="" />
            </div>
            <div className="home__row">
           { TopSelling.map((items) =>{
           return(
            <Product 
               id = {items.id}
               title={items.title}
               price={items.price}
               rating= {items.rating}
               image = {productImg1}
            />
           )
            })}
            </div>
            <div className="home__row">
            {LikedProducts.map((items) =>{
            return(
            <Product
                id = {items.id}
                title={items.title}
                price={items.price}
                rating= {items.rating}
                image = {productImg1}
            />
                )
            })}
            </div>
            <div className="home__row">
                {LastSeen.map((items) =>{
                return(
                    <Product 
                    id = {items.id}
                    title={items.title}
                    price={items.price}
                    rating= {items.rating}
                    image = {productImg1}
                    />
                )
                })}
            </div>
            
        </div>
    );
 };
 
 export default Home;