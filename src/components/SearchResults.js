import React from 'react';

import Track from './Track';

function SearchResults({ data }) {
    const resultsArray = data.tracks.items;
    const tracks = resultsArray.map(track => {
        return {
            track_name: track.name,
            track_id: track.id,
            album_name: track.album.name,
            album_art: track.album.images[2], //Worst quality but best load time
            artists: track.artists.map(artist => artist.name),
            preview: track.preview_url
        }
    })

    return (
        <div>
            <p>SearchResults: </p>
            {tracks.map(track => <Track track={track}/>)}
        </div>
    );
}

export default SearchResults;