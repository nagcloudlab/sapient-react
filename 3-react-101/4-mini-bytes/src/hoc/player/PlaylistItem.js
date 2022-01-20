import React, { Component } from 'react';

class PlaylistItem extends Component {
    render() {
        let { value: item, selectedPlaylist, onSelect } = this.props
        let className = `list-group-item ${item === selectedPlaylist ? 'bg-primary' : ''}`
        return (
            <>
                <li style={{ cursor: 'pointer' }}
                    className={className}
                    onClick={e => onSelect(item)}
                >
                    {item}
                </li>
            </>
        );
    }
}

export default PlaylistItem;