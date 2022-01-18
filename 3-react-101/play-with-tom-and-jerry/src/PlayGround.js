import React, { Component } from 'react';
import Cartoon from './Cartoon';
import FightStatus from './FightStatus';

class PlayGround extends Component {
    state = {
        cartoon: 'Unknown'
    }
    changeCartoon(name) {
        this.setState({
            cartoon: name
        })
    }
    render() {
        let { title } = this.props;
        return (
            <div className='card'>
                <div className='card-header'>{title}</div>
                <div className='card-body'>
                    <div className='d-flex'>
                        <Cartoon cartoonName="Tom" imagePath="tom.png" onFight={name => this.changeCartoon(name)} />
                        <Cartoon cartoonName="Jerry" imagePath="jerry.png" onFight={name => this.changeCartoon(name)} />
                        <br />
                    </div>
                    <br />
                    <FightStatus cartoon={this.state.cartoon} />
                </div>
            </div>
        );
    }
}

export default PlayGround;

