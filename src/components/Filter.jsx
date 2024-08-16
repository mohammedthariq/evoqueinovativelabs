

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URLS, ACCESS_TOKEN } from '../services/api';

const Filter = ({ onFilterResults }) => {
  const [filters, setFilters] = useState({
    page_num: 1, // Ensure page_num is included
    segment_id: null,
    price_type: null,
    rating_by: null,
    application_type: null,
    min_price_limit: 0,
    max_price_limit: 9000,
    min_investment_limit: 0,
    max_investment_limit: 50000,
    sort_by: null,
  });

  const [filterOptions, setFilterOptions] = useState({
    segments: [],
    filter_data: [],
    min_price_limit: 0,
    max_price_limit: 9000,
    min_investment_limit: 0,
    max_investment_limit: 50000
  });

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const response = await axios.get(API_URLS.filterData, {
          headers: { 'Access-Token': ACCESS_TOKEN },
        });
        setFilterOptions(response.data.data);
      } catch (error) {
        console.error('Error fetching filter data', error.response?.data || error.message);
      }
    };

    fetchFilterData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleFilter = async () => {
    try {
      const response = await axios.post(API_URLS.filter, filters, {
        headers: { 'Access-Token': ACCESS_TOKEN },
      });
      onFilterResults(response.data);
    } catch (error) {
      console.error('Error applying filters', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Filters</h2>
      
      <div>
        <label>Segment:</label>
        <select name="segment_id" onChange={handleFilterChange}>
          <option value="">Select Segment</option>
          {filterOptions.segments.map(segment => (
            <option key={segment.id} value={segment.id}>
              {segment.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Price Type:</label>
        <input
          type="number"
          name="min_price_limit"
          value={filters.min_price_limit}
          onChange={handleFilterChange}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="max_price_limit"
          value={filters.max_price_limit}
          onChange={handleFilterChange}
          placeholder="Max Price"
        />
      </div>

      <div>
        <label>Investment Type:</label>
        <input
          type="number"
          name="min_investment_limit"
          value={filters.min_investment_limit}
          onChange={handleFilterChange}
          placeholder="Min Investment"
        />
        <input
          type="number"
          name="max_investment_limit"
          value={filters.max_investment_limit}
          onChange={handleFilterChange}
          placeholder="Max Investment"
        />
      </div>

      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filter;
