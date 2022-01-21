import {useState} from "react";
import classNames from "classnames";

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

    const [tab, setTab] = useState(1)

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
                    <div>None Yet</div>
                )
            }
        }
    }

    const handleTabChange=(e,tabIndex)=>{
        e.preventDefault()
        setTab(tabIndex)
    }

    const renderProducts = () => {
        return products.map(product => {
            return (
                <div key={product.id} className={"list-group-item"}>
                    <div className={"row"}>
                        <div className={"col-4"}>
                            <img className={"img-fluid"} src={product.imagePath}/>
                        </div>
                        <div className={"col-8"}>
                            <div>{product.name}</div>
                            <div>&#8377;{product.price}.00</div>
                            <button disabled={!product.isAvailable} className="btn btn-sm btn-dark">buy</button>
                            <br/>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a
                                        onClick={e => handleTabChange(e,1)}
                                        className={classNames('nav-link',{active:tab===1})}
                                        href={""}>
                                        Description
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => handleTabChange(e,2)}
                                       className={classNames('nav-link',{active:tab===2})}
                                       href={""}>
                                        Specifications
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => handleTabChange(e,3)}
                                       className={classNames('nav-link',{active:tab===3})}
                                       href={""}>
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                            {renderTabPanel(product)}
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
