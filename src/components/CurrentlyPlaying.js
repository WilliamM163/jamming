import React from 'react';

import styles from '../styles/App.module.css';

function CurrentlyPlaying({ currentTrack }) {
    return (
        <div className={styles.player_container}>
            <img
                src={currentTrack.album.images[1].url}
                className={styles.player_album_art}
            />
            <div>
                <h2 className={styles.player_text}>{currentTrack.name}</h2>
                <audio
                    src={currentTrack.preview_url === null ? '' : currentTrack.preview_url}
                    controls
                ></audio>
            </div>
        </div>
    );
}

export default CurrentlyPlaying;