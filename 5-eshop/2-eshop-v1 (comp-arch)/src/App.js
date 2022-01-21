import {useState} from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import CartBadge from "./components/CartBadge";

function App() {

    const [products] = useState([
        {
            id: 1,
            name: 'Laptop',
            price: 250000,
            description: "New pro",
            isAvailable: true,
            imagePath: 'images/Laptop.png'
        },
        {
            id: 2,
            name: 'Mobile',
            price: 15000,
            description: "New model",
            isAvailable:true,
            imagePath:'images/Mobile.png'
        }
    ])
    const [cart,setCart]=useState([])

    const addToCart=item=>{
        setCart([...cart,item])
    }

    const renderProducts = () => {
        return products.map(product => {
            return (
                <div key={product.id} className={"list-group-item"}>
                    <Product value={product}
                             onBuy={item=>addToCart(item)}/>
                </div>
            )
        })
    }

    return (
        <div className="">
            <Navbar title={"e-shop"}/>
            <hr/>
            <div className={"container"}>
               <CartBadge count={cart.length}/>
            </div>
            <hr/>
            <div className="container">
                {renderProducts()}
            </div>
        </div>
    );

}

export default App;
