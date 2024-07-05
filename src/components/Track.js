import React from 'react';

import styles from '../styles/Track.module.css';

function Track({ track }) {
    function handleClick() {
        console.log('click');
        const audio = new Audio(track.preview_url);
        audio.play(audio);
    }
    
    return (
        <div className={styles.track}>
            <img
                src={track.album_art.url}
                onClick={handleClick}
                style={{
                    'width': 80,
                    'height': 80
                }}
            />
            <div className={styles['track-info']}>
                <p className={styles.track_name}>{track.track_name}</p>
                <p className={styles.album_name}>{track.album_name}</p>
                <p className={styles.artist_name}>{track.artists.join(', ')}</p>
            </div>
        </div>
    );
}

export default Track;