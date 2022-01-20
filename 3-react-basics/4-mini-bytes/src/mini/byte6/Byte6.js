import React, { Component } from 'react';



class Columns extends React.Component {
    render() {
        return (
            <>
                <td>col-1</td>
                <td>col-2</td>
                <td>col-3</td>
            </>
        );
    }
}

class Table extends React.Component {
    render() {
        return (
            <table className='table'>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                    <tr>
                        <Columns />
                    </tr>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        );
    }
}


class Byte6 extends Component {
    render() {
        return (
            <div>
                <Table />
            </div>
        );
    }
}




export default Byte6;