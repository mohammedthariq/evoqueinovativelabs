// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import { API_URLS, ACCESS_TOKEN } from '../services/api';

const Search = ({ onSearchResults }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post(API_URLS.search, {
        page_num: 1,
        text: searchText,
      }, {
        headers: { 'Access-Token': ACCESS_TOKEN },
      });
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
