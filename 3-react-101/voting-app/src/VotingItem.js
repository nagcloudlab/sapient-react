import React, { Component } from 'react';
import './VotingItem.css';

class VotingItem extends Component {
    state = {
        voteCount: 0
    }
    handleVote(e, v) {
        let { voteCount } = this.state
        voteCount += v
        this.setState({ voteCount })
        let { itemName, onVote } = this.props;
        onVote({ itemName, vote: v }); // informing to parent about this event
    }
    render() {
        let { itemName = 'Unknown' } = this.props
        let { voteCount } = this.state
        return (
            <div className='vitem'>
                <div className='display-4'>{itemName}</div>
                <div className='d-flex justify-content-between mt-3'>
                    <button onClick={e => this.handleVote(e, 1)} className='btn btn-sm btn-success'>
                        <i className='fa fa-thumbs-up'></i>
                    </button>
                    <div className=''>{voteCount}</div>
                    <button onClick={e => this.handleVote(e, -1)} className='btn btn-sm btn-danger'>
                        <i className='fa fa-thumbs-down'></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default VotingItem;