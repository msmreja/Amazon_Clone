import React from 'react';
import './header.css';
import amazonLogo from '../../assets/Amazon.png';


const Header = () => {
    return (
        <div>
            <div className="header__container">
                <div className="header__logo">
                    <img src={amazonLogo} alt="Amazon Logo" />
                </div>
                <div className="header__search">
                    <i className="uil uil-search icon"></i>
                    <input type='text' />
                </div>
                <div className="header__options">
                    <div className="header__option">
                        <span className="header__subtitle">Hello Guest,</span>
                        <span className="header__options">Sing_In</span>
                    </div>
                    <div className="header__option">
                        <span className="header__subtitle">Returns</span>
                        <span className="header__options">&_Order</span>
                        </div>
                    <div className="header__option">
                        <span className="header__subtitle">Your</span>
                        <span className="header__options">Prime</span>
                    </div>
                    <div className=""></div>
                    <i className="uil uil-shopping-cart icon cart__icon"></i> 
                    <span className="header__count">0</span>
                </div>
                <div className="header__option">
                </div>
            </div>
        </div>
    );
};

export default Header;