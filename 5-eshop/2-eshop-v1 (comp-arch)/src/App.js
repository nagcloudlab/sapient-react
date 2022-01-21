import {useState} from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

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
        <div className="">
            <Navbar title={"e-shop"}/>
            <hr/>
            <hr/>
            <div className="container">
                {renderProducts()}
            </div>
        </div>
    );

}

export default App;
