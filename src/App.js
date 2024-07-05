import React, { useState } from 'react';

import styles from './styles/App.module.css';
import styletabs from './styles/Tabs.module.css';

import demo_data from './demo_data';

import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import SearchResults from './components/SearchResults';


function App({ access_token }) {
  const [searchResult, setSearchResult] = useState(demo_data);
  const [currentTrack, setCurrentTrack] = useState(demo_data.tracks.items[0]);

  const handleSearch = async (query) => {
    const searchURL = `https://api.spotify.com/v1/search?q=${query}&type=track&market=NZ`;
    const header = { Authorization: `Bearer ${access_token}` };

    const result = await fetch(searchURL, {
      method: 'GET',
      headers: header
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    });

    setSearchResult(result);
  }

  return (
    <div className={styles.main}>
      <SearchBar handleSearch={handleSearch} />
      <SearchResults data={searchResult} setCurrentTrack={setCurrentTrack} />
      <div className={styletabs.tabs}>
        <CurrentlyPlaying currentTrack={currentTrack} />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
