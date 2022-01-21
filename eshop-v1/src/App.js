import {useState} from "react";

function App() {

    const [products] = useState([
        {
            id: 1,
            name: 'Laptop',
            price: 250000,
            description: "New pro",
            isAvailable:true,
            imagePath:'images/Laptop.png'
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

    const renderProducts=()=>{
        return products.map(product=>{
            return (
                <div key={product.id} className={"list-group-item"}>
                   <div className={"row"}>
                       <div className={"col-4"}>
                           <img className={"img-fluid"} src={product.imagePath}/>
                       </div>
                       <div className={"col-8"}>
                           <div>{product.name}</div>
                           <div>&#8377;{product.price}.00</div>
                           <div>{product.description}</div>
                           <button disabled={!product.isAvailable} className="btn btn-sm btn-dark">buy</button>
                       </div>
                   </div>
                </div>
            )
        })
    }

    return (
        <div className="">
            <nav className="navbar navbar-light bg-dark bg-opacity-50">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">e-shop</a>
                </div>
            </nav>
            <hr/>
            <hr/>
            <div className="container">
                {renderProducts()}
            </div>
        </div>
    );
}

export default App;
