import React from 'react';

function CartBadge({count}) {
    return (
        <div>
            <i style={{color:'tomato',fontSize:'20px'}}
               className={"fa fa-shopping-basket"}>
            </i>
            &nbsp;<span>{count}</span>&nbsp;item(s) in cart
        </div>
    );
}

export default CartBadge;