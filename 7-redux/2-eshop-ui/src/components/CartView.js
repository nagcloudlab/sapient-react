import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buy, removeCartItem} from "../actions/cart";

function CartView({}) {
    let cart = useSelector(state => state.cart)
    let dispatch = useDispatch()
    const handleDelete = (e, item) => {
        dispatch(removeCartItem(item))
    }
    const handleQty=(item,qty)=>{
        dispatch(buy(item,qty))
    }
    const renderCartLines = () => {
        const keys = Object.keys(cart)
        return keys.map((key, idx) => {
            const cartLine = cart[key];
            const {item, qty} = cartLine;
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>
                        <div className={"d-flex justify-content-around"}>
                            <i onClick={e=>handleQty(item,-1)} className={"fa fa-minus"}></i>
                            {qty}
                            <i onClick={e=>handleQty(item,1)} className={"fa fa-plus"}></i>
                        </div>
                    </td>
                    <td><i style={{cursor: 'pointer'}} onClick={e => handleDelete(e, item)}
                           className={"fa fa-trash"}></i></td>
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