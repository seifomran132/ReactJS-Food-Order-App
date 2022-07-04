import React from 'react';
import CartIcon from '../Cart/CartIcon'

import classes from './HeaderCardBtn.module.css'

function HeaderCardBtn(props) {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}

export default HeaderCardBtn;