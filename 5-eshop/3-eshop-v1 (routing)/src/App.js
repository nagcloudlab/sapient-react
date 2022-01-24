import {useState} from "react";
import Navbar from "./components/Navbar";
import CartBadge from "./components/CartBadge";
import {Routes, Route, Outlet, Link, BrowserRouter} from "react-router-dom";
import ProductList from "./components/ProductList";
import CartView from "./components/CartView";
import Home from "./components/Home";

function App() {

    const [cart, setCart] = useState({})

    const addToCart = item => {
        let {id} = item
        let cartLine = cart[id]
        if (cartLine)
            cartLine = {...cartLine, qty: cartLine.qty + 1}
        else
            cartLine = {item, qty: 1}
        setCart({...cart, [id]: cartLine})
    }


    return (
        <div className="">
            <Navbar title={"e-shop"}/>
            <hr/>
            <div className={"container"}>
                <CartBadge count={Object.keys(cart).length}/>
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
                    <Route path={"/products"} element={<ProductList onBuy={item=>addToCart(item)}/>}/>
                    <Route path={"/cart"} element={<CartView value={cart}/>}/>
                    <Route path={"*"} element={<div>Not Implemented</div>}/>
                </Routes>
            </div>
        </div>
    );

}

export default App;
