 import React from 'react';
 import './home.css'
 import BackgroudSlide1 from '../../assets/homeBackground.jpg';
 import Product from '../product/Product';
 import productImg1 from '../../assets/Alexa.jpg';

 const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__img'src={BackgroudSlide1} alt="" />
            </div>
            <div className="home__row">
                <Product 
                id = "123456"
                title='Amazon Alexa speaker for your home'
                price='99.99'
                rating= {2}
                image = {productImg1}
                />
                <Product />
            </div>
            <div className="home__row">
            <Product />
            <Product />
            <Product />
            </div>
            <div className="home__row">
            <Product />
            </div>
            
        </div>
    );
 };
 
 export default Home;