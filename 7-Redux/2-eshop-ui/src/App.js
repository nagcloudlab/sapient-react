import {useState} from "react";
import Navbar from "./components/Navbar";
import CartBadge from "./components/CartBadge";
import {Routes, Route, Outlet, Link, BrowserRouter} from "react-router-dom";
import ProductList from "./components/ProductList";
import CartView from "./components/CartView";
import Home from "./components/Home";

function App() {

    return (
        <div className="">
            <Navbar title={"e-shop"}/>
            <hr/>
            <div className={"container"}>
                <CartBadge />
            </div>
            <hr/>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        Cart
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/orders">
                        Orders
                    </Link>
                </li>
            </ul>
            <hr/>
            <div className="container">
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/products"} element={<ProductList />}/>
                    <Route path={"/cart"} element={<CartView/>}/>
                    <Route path={"*"} element={<div>Not Implemented</div>}/>
                </Routes>
            </div>
        </div>
    );

}

export default App;
