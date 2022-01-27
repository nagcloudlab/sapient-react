import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import Review from "./Review";
import {useDispatch, useSelector} from "react-redux";
import {loadReviews} from "../actions/reviews";
import {buy} from "../actions/cart";

function Product({value: product}) {

    const [tab, setTab] = useState(1)
    const reviews = useSelector(state => state.reviews[product.id] || [])
    const cartLine = useSelector(state=>state.cart[product.id]||{})
    const dispatch = useDispatch();

    useEffect(() => {
        if (tab === 3) {
            let action = loadReviews(product.id, 10)
            dispatch(action)
        }
    }, [tab])

    const handleTabChange = (e, tabIndex) => {
        e.preventDefault()
        setTab(tabIndex)
    }

    const handleBuy = e => {
        let item = {id: product.id, name: product.name}
        dispatch(buy(item))
    }

    const renderReviews = () => {
        return reviews.map((review, idx) => {
            return (
                <div key={idx}>
                    <Review value={review}/>
                </div>
            )
        })
    }

    const renderTabPanel = product => {
        switch (tab) {
            case 1: {
                return (
                    <div>{product.description}</div>
                )
            }
            case 2: {
                return (
                    <div>Not Yet</div>
                )
            }
            case 3: {
                return (
                    <div>{renderReviews()}</div>
                )
            }
        }
    }

    return (
        <div>
            <div className={"row"}>
                <div className={"col-4"}>
                    <img className={"img-fluid"} src={product.imagePath}/>
                </div>
                <div className={"col-8"}>
                    <div>{product.name}</div>
                    <div>&#8377;{product.price}.00</div>
                    <button onClick={e => handleBuy(e)}
                            disabled={!product.isAvailable}
                            className="btn btn-sm btn-dark">
                        buy - <span className={"badge bg-danger"}>{cartLine.qty?cartLine.qty:0} </span>
                    </button>
                    <br/>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a
                                onClick={e => handleTabChange(e, 1)}
                                className={classNames('nav-link', {active: tab === 1})}
                                href={""}>
                                Description
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={e => handleTabChange(e, 2)}
                               className={classNames('nav-link', {active: tab === 2})}
                               href={""}>
                                Specifications
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={e => handleTabChange(e, 3)}
                               className={classNames('nav-link', {active: tab === 3})}
                               href={""}>
                                Reviews
                            </a>
                        </li>
                    </ul>
                    {renderTabPanel(product)}
                </div>
            </div>
        </div>
    );
}

export default Product;