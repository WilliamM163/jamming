import React from 'react';

import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import Track from './components/Track';
import SaveToSpotify from './components/SaveToSpotify';


function App({ access_token }) {
  return (
    <div>
      <SearchBar access_token={access_token} />
      <div>
        <Playlist />
        <SaveToSpotify />
      </div>
    </div>
  );
}

export default App;
