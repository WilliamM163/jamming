import React, { useState } from 'react';

import SearchResults from './SearchResults';


function SearchBar({ access_token }) {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleChange = ({ target }) => {
        if (searchResult != null) {
            setSearchResult(null);
        }
        setQuery(target.value);
    }

    const handleSearch = async () => {
        const searchURL = `https://api.spotify.com/v1/search?q=${query}&type=track&market=NZ`;
        const header = {Authorization: `Bearer ${access_token}`};

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
        <div>
            <input
                type="text"
                placeholder="Search song"
                value={query}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
            {searchResult !== null ? <SearchResults data={searchResult} /> : <div></div>}
        </div>
    );
}

export default SearchBar;