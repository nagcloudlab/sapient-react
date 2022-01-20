import React, { Component } from 'react';
import VotingItem from './VotingItem';
import VotingTable from './VotingTable';

class VotingBox extends Component {
    state = {
        votingItemNames: [
            "HTML",
            "CSS",
            "Javascript",
            "React",
        ],
        votings: {}
    }
    updateVotings(e) {
        let { itemName, vote } = e
        let { votings } = this.state
        let votingLine = votings[itemName]
        if (!votingLine) {
            votingLine = {}
            votingLine.itemName = itemName;
            votingLine.upVotes = vote > 0 ? 1 : 0
            votingLine.downVotes = vote < 0 ? 1 : 0
        } else {
            if (vote > 0)
                votingLine.upVotes = votingLine.upVotes + 1
            if (vote < 0)
                votingLine.downVotes = votingLine.downVotes + 1
        }
        votings = { ...votings, [itemName]: votingLine }
        this.setState({ votings }) // 
    }
    render() {
        let { votings, votingItemNames } = this.state
        return (
            <div className='card'>
                <div className='card-header'>Voting Box</div>
                <div className='card-body'>
                    <div className='d-flex flex-wrap'>
                        {
                            votingItemNames.map((itemName, idx) => {
                                return <VotingItem key={idx} itemName={itemName} onVote={e => this.updateVotings(e)} />
                            })
                        }
                    </div>
                    <div className='mt-3'>
                        <VotingTable votings={votings} />
                    </div>
                </div>
            </div>
        );
    }
}

export default VotingBox;