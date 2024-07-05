import React from 'react';

import Track from './Track';

function SearchResults({ data, setCurrentTrack }) {
    const tracks = data.tracks.items;

    return (
        <div>
            {tracks.map(track => <Track track={track} setCurrentTrack={setCurrentTrack} />)}
        </div>
    );
}

export default SearchResults;