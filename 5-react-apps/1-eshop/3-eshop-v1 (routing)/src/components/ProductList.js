import React, {useState} from 'react';
import Product from "./Product";

function ProductList({onBuy}) {

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
            isAvailable: true,
            imagePath: 'images/Mobile.png'
        }
    ])

    const renderProducts = () => {
            return products.map(product => {
                return (
                    <div key={product.id} className={"list-group-item"}>
                        <Product value={product}
                                 onBuy={onBuy}/>
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