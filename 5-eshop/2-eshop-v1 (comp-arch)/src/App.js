import {useState} from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import ProductList from "./components/ProductList";

function App() {

    const [cart, setCart] = useState({})
    const [isCartVisible, setCartVisible] = useState(false)

    const toggleCartView = () => {
        setCartVisible(!isCartVisible)
    }

    const addToCart = item => {
        let {id} = item
        let cartLine = cart[id]
        if (cartLine)
            cartLine = {...cartLine, qty: cartLine.qty + 1}
        else
            cartLine = {item, qty: 1}
        setCart({...cart, [id]: cartLine})
    }

    const renderCartView = () => {
        if (isCartVisible)
            return <CartView value={cart}/>
    }
    const renderProductList = () => {
        if (!isCartVisible)
            return <ProductList onBuy={item=>addToCart(item)}/>
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
                    <a onClick={e => toggleCartView()}
                       className="nav-link" href="#">
                        {isCartVisible?'Products':'Cart'}
                    </a>
                </li>
            </ul>
            <hr/>
            <div className="container">
                {renderCartView()}
                {renderProductList()}
            </div>
        </div>
    );

}

export default App;
