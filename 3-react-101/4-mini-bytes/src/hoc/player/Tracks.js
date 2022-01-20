import React, { Component } from 'react';

import { connect } from './connect'
// import store from '../store/index'

/**
 * 
 * author : deepak
 * 
 */

class Tracks extends Component {

    // constructor(props) {
    //     super()
    //     this.state = {
    //         tracks: store.getState().tracks[props.selectedPlaylist] || []
    //     }
    //     console.log("Tracks::constructor()");
    // }

    // componentDidMount() {
    //     console.log("didMount logic");
    // }

    // componentDidUpdate(prevProps) {
    //     console.log("didUpdate logic");
    //     console.log(this.props.selectedPlaylist);
    //     if (this.props.selectedPlaylist !== prevProps.selectedPlaylist) {
    //         let tracks = store.getState().tracks[this.props.selectedPlaylist] || []
    //         console.log(tracks);
    //         this.setState({ tracks })
    //     }
    // }

    renderTracks() {
        // let { tracks } = this.state
        let { tracks } = this.props
        return tracks.map((track) => {
            return (
                <tr key={track.id}>
                    <td>{track.title}</td>
                    <td>{track.duration}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='card card-body'>
                <table className='table'>
                    <tbody>
                        {this.renderTracks()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function callback(state, props) {
    return {
        tracks: state.tracks[props.selectedPlaylist] || []
    }
}

export default connect(Tracks, callback);