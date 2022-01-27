import React, {useEffect, useState} from 'react';
import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../actions/products";

function ProductList({}) {

    const products=useSelector(state=>state.products);
    const dispatch=useDispatch()

    useEffect(()=>{
        let action=loadProducts("elec",2)
        setTimeout(()=>{
            dispatch(action)
        },3000) // intentional delay to simulate n/w call
    },[])

    const renderProducts = () => {
            return products.map(product => {
                return (
                    <div key={product.id} className={"list-group-item"}>
                        <Product value={product}/>
                    </div>
                )
            })
    }
    return (
        <div>
            {renderProducts()}
        </div>
    );
}

export default ProductList;