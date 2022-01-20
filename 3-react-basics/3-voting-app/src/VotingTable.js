import React, { Component } from 'react';

class VotingTable extends Component {

    renderVotingLines(votings) {
        return Object.keys(votings).map((key, idx) => {
            let votingLine = votings[key]
            return (
                <tr key={idx} className={votingLine.upVotes < votingLine.downVotes ? 'bg-warning' : ''}>
                    <td>{votingLine.itemName}</td>
                    <td>{votingLine.upVotes}</td>
                    <td>{votingLine.downVotes}</td>
                    <td>{votingLine.upVotes + votingLine.downVotes}</td>
                </tr>
            )
        })
    }
    renderVotingTable(votings) {
        if (Object.keys(votings).length == 0) {
            return null
        } else {
            return (
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Up-votes</th>
                            <th>Down-votes</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderVotingLines(votings)
                        }
                    </tbody>
                </table>
            )
        }
    }

    render() {
        let { votings } = this.props
        return (
            <div>
                {
                    this.renderVotingTable(votings)
                }
            </div>
        );
    }
}

export default VotingTable;