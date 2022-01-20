import React, { Component } from 'react';
import store from '../store/index'
/**
 * Author : Tarun
 */

class Playlist extends Component {

    constructor(props) {
        super()
        this.state = {
            playlists: store.getState().playlists
        }
    }

    renderPlaylists() {
        let { playlists } = this.state
        let { selectedPlaylist, onSelect } = this.props
        return playlists.map((item, idx) => {
            let className = `list-group-item ${item === selectedPlaylist ? 'bg-primary' : ''}`
            return (
                <li style={{ cursor: 'pointer' }}
                    className={className}
                    key={idx}
                    onClick={e => onSelect(item)}
                >
                    {item}
                </li>
            )
        })
    }

    render() {
        return (
            <div className='card card-body'>
                <ul className="list-group">
                    {this.renderPlaylists()}
                </ul>
            </div>
        );
    }
}

export default Playlist;