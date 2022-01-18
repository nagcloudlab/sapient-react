import React, { Component } from 'react';

class Cartoon extends Component {
    render() {
        let { imagePath, cartoonName, onFight } = this.props
        return (
            <div className='card card-body'>
                <div className='row'>
                    <div className='col-3'>
                        <img className='img-fluid' src={imagePath} alt='cartoon-image' />
                    </div>
                    <div className='col-9'>
                        <div className='display-4'>{cartoonName}</div>
                        <br />
                        <button onClick={e => onFight(cartoonName)} className='btn btn-primary'>Fight</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cartoon;