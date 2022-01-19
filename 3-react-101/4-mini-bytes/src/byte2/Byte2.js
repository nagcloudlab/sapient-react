import React, { Component } from 'react';



class Byte2 extends Component {

    state = {
        products: [
            { id: 1213, name: 'Laptop', price: 4000 },
            { id: 1214, name: 'Mobile', price: 3000 },
            { id: 1217, name: 'Airpods', price: 6000 },
            { id: 1216, name: 'Mic', price: 600 },
        ]
    }

    handleDelete(id) {
        let { products } = this.state;
        products = products.filter(p => p.id !== id)
        this.setState({ products })
    }

    renderTableRows() {
        return this.state.products.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>&#8377;{product.price}</td>
                    <td><button onClick={e => this.handleDelete(product.id)} className='btn btn-danger'>delete</button></td>
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

export default Byte2;