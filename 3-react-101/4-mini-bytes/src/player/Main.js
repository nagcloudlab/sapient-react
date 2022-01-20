import React, { Component } from 'react';
import Playlist from './Playlist';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            selectedPlaylist: ''
        }
    }
    handlePlaylistChange(item) {
        this.setState({
            selectedPlaylist: item
        })
    }
    render() {
        let { selectedPlaylist } = this.state
        return (
            <div>
                <div className='row'>
                    <div className='col-4'>
                        <Playlist
                            selectedPlaylist={selectedPlaylist}
                            onSelect={item => this.handlePlaylistChange(item)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;