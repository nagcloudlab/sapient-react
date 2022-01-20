import React, { Component } from 'react';
import { connect } from './connect'
import PlaylistItem from './PlaylistItem';
// import store from '../store/index'

/**
 * Author : Tarun
 */

class Playlist extends Component {

    // constructor(props) {
    //     super()
    //     this.state = {
    //         playlists: store.getState().playlists
    //     }
    // }

    // componentDidMount() {
    //     console.log("didMount logic");
    // }

    // componentDidUpdate() {
    //     console.log("didUpdate logic");
    // }

    renderPlaylistItems() {
        // let { playlists } = this.state
        let { playlists } = this.props
        let { selectedPlaylist, onSelect } = this.props
        return playlists.map((item, idx) => {
            return (
                <PlaylistItem
                    key={idx}
                    value={item}
                    selectedPlaylist={selectedPlaylist}
                    onSelect={onSelect}
                />
            )
        })
    }

    render() {
        return (
            <div className='card card-body'>
                <ul className="list-group">
                    {this.renderPlaylistItems()}
                </ul>
            </div>
        );
    }
}


function callback(state) {
    return {
        playlists: state.playlists || []
    }
}

export default connect(Playlist, callback);