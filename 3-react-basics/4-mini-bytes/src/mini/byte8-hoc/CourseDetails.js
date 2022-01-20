import React, { Component } from 'react';

import { withCard } from './withCard'

class CourseDetails extends Component {
    render() {
        return (
            <>
                <div className='display-4'>React.js</div>
                <div className='display-6'>
                    UI library
                </div>
            </>
        );
    }
}

export default withCard(CourseDetails);   