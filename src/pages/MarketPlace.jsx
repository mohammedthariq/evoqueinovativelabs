import React, { useState, useEffect } from 'react';
import { fetchFilterData, fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const MarketPlace = () => {

    const [filterData, setFilterData] = useState(null); // Initially null to handle loading state
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
      page_num: 1,
      filter_id: null,
      segment_id: null,
      price_type: null,
      rating_by: null,
      application_type: null,
      min_price_limit: 0,
      max_price_limit: 29500000,
      min_investment_limit: 0,
      max_investment_limit: 100000000,
      sort_by: null
    });
  
    useEffect(() => {
      // Load filter data
      fetchFilterData().then(data => {
        if (data && data.data) {
          setFilterData(data.data);
        } else {
          console.error('Error: Filter data not received');
        }
        setLoading(false);
      }).catch(error => {
        console.error('Error fetching filter data:', error);
        setLoading(false);
      });
  
      // Load initial product list
      loadProducts(filters);
    }, []);
  
    const loadProducts = (filters) => {
      setLoading(true);
      fetchProducts(filters).then(data => {
        if (data && data.data && data.data.products) {
          setProducts(data.data.products);
        } else {
          console.error('Error: Product data not received');
        }
        setLoading(false);
      }).catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
    };
  
    const handleFilterChange = (newFilters) => {
      const updatedFilters = { ...filters, ...newFilters };
      setFilters(updatedFilters);
      loadProducts(updatedFilters);
    };
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!filterData) {
      return <p>No filter data available.</p>;
    }
  return (
    <div className="marketplace">
      <Filters filterData={filterData} onChange={handleFilterChange} />
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  )
}

export default MarketPlace
