import React from 'react';

function CartView({value:cart}) {

    const renderCartLines=()=>{
        const keys=Object.keys(cart)
        return keys.map((key,idx)=>{
            const cartLine=cart[key];
            const {item,qty}=cartLine;
            return (
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{item.name}</td>
                    <td>{qty}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <table className={"table"}>
                <thead>
                <tr>
                    <th>s-no</th>
                    <th>name</th>
                    <th>qty</th>
                </tr>
                </thead>
                <tbody>
                {renderCartLines()}
                </tbody>
            </table>
        </div>
    );
}

export default CartView;