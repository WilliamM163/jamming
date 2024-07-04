import React from 'react';

function Track({ track }) {
    console.log(track);
    return (
        <div>
            <img src={track.album_art.url} />
            <ul>
                <li>{track.track_name}</li>
                <li>{track.album_name}</li>
                <li>{track.artists.join(', ')}</li>
            </ul>
            <audio controls src={track.preview}></audio>
        </div>
    );
}

export default Track;