import React from 'react';

import styles from '../styles/Track.module.css';

function Track({ track, setCurrentTrack }) {
    function openSpotify({target}) {
        window.open(`https://open.spotify.com/track/${target.id}`, '_blank');
    }

    return (
        <div className={styles.track}>
            <img
                src={track.album.images[1].url}
                style={{
                    'width': 80,
                    'height': 80
                }}
            />
            <div className={styles['track-info']}>
                <p className={styles.track_name}>{track.name}</p>
                <p className={styles.album_name}>{track.album.name}</p>
                {/* <p className={styles.artist_name}>{track.artists.join(', ')}</p> */}
            </div>
            <div className={styles.buttons}>
                <p
                    className={styles.text_icon}
                    onClick={() => {
                        console.log(track);
                        setCurrentTrack(track);
                    }}
                >⏯</p>
                <p className={styles.text_icon}>⨁</p>
                <img
                    src='./images/spotify_icon.png'
                    style={{ 'height': 20, 'width': 20, 'paddingRight': 5 }}
                    className={styles.spotify_icon}
                    onClick={openSpotify}
                    id={track.track_id}
                />
            </div>
        </div>
    );
}

export default Track;