import React, { useState } from 'react';


function SearchBar({ access_token }) {
    const [query, setQuery] = useState('');

    const handleChange = ({ target }) => {
        setQuery(target.value);
    }

    const handleSearch = async () => {
        const searchURL = `https://api.spotify.com/v1/search?q=${query}&type=track&market=NZ`;
        const header = {Authorization: `Bearer ${access_token}`};

        const searchResult = await fetch(searchURL, {
            method: 'GET',
            headers: header
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        });

        console.log(searchResult);
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
        </div>
    );
}

export default SearchBar;