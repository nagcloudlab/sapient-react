import React, { Component } from 'react';

import { withCard } from './withCard'

class UserProfile extends Component {
    render() {
        return (
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>Nag</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>39</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>Chennai</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default withCard(UserProfile); 