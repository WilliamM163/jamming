import React, { useState } from 'react';

import styles from '../styles/App.module.css';


function SearchBar({ handleSearch }) {
    const [query, setQuery] = useState('');

    const handleChange = ({ target }) => {
        setQuery(target.value);
    }

    const gridSpread = {'gridArea': '1 / 1 / 1 / 3'}

    return (
        <div className={styles.primary_container} style={gridSpread}>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search song..."
                    value={query}
                    onChange={handleChange}
                    className={styles['search-input']}
                />
                <button
                    onClick={() => {handleSearch(query)}}
                    className={styles['search-input']}
                >🔍 Search</button>
            </div>
            
        </div>
    );
}

export default SearchBar;