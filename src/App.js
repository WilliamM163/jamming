import React from 'react';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import TrackList from './components/Tracklist';
import Track from './components/Track';
import SaveToSpotify from './components/SaveToSpotify';


function App({ access_token }) {
  return (
    <div>
      <SearchBar access_token={access_token} />
      <SearchResults />
      <Playlist />
      <TrackList />
      <Track />
      <SaveToSpotify />
    </div>
  );
}

export default App;
