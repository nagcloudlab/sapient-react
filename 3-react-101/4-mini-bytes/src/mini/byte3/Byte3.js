import React, { Component } from 'react';



class Byte3 extends Component {

    state = {
        products: [
            { id: 1213, name: 'Laptop', price: 4000, isAvailable: false },
            { id: 1214, name: 'Mobile', price: 3000, isAvailable: true },
            { id: 1217, name: 'Airpods', price: 6000, isAvailable: false },
            { id: 1216, name: 'Mic', price: 600, isAvailable: true },
        ]
    }

    renderBuyBtn(product) {
        if (product.isAvailable) {
            return <button className='btn btn-primary'>buy</button>
        } else {
            return null
        }
    }

    renderTableRows() {
        return this.state.products.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>&#8377;{product.price}</td>
                    {/* <td>{this.renderBuyBtn(product)}</td> */}
                    <td><button disabled={!product.isAvailable} className='btn btn-primary'>buy</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <table className='table'>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Byte3;