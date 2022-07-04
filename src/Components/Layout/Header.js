import React from 'react';
import mealsImage from '../../assets/meals.jpg'
import HeaderCardBtn from './HeaderCardBtn';

import classes from './Header.module.css'

function Header(props) {

   

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCardBtn onClick={props.onShowCart}></HeaderCardBtn>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Table contains a lot of food'/>
            </div>
        </React.Fragment>
    );
}

export default Header;