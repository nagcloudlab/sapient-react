import React from 'react';
import {useSelector} from "react-redux";

function CartBadge({}) {
    let cart=useSelector(state=>state.cart)
    return (
        <div>
            <i style={{color:'tomato',fontSize:'20px'}}
               className={"fa fa-shopping-basket"}>
            </i>
            &nbsp;<span>{Object.keys(cart).length}</span>&nbsp;item(s) in cart
        </div>
    );
}

export default CartBadge;