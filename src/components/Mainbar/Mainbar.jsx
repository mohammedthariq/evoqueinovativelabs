import React, { useState, useEffect } from 'react';
import "./Mainbar.css";
import Cards from "../Cards/Cards";

const Mainbar = ({ products, page, setPage, perPage , sort , setSort }) => {
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const totalPages = Math.ceil(products.length / perPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>★</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  
  return (
    <>
      <div className="row justify-content-end main-search">
    
        <select className='dropdown border-0' value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="newly-added">Newly Added</option>
      </select>
     
      </div>

      <div className="row main-section">
        {products.length > 0 ? (
          products
            .slice((currentPage - 1) * perPage, currentPage * perPage)
            .map((product) => (
              <div className="col-md-6" key={product.name}>
                <Cards data={product} renderStars={renderStars} />
              </div>
            ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      <div className="pagination">
        <button
          className="page-item"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {[...Array(totalPages).keys()].map(num => (
          <button
            className={`page-item ${currentPage === num + 1 ? 'active' : ''}`}
            key={num + 1}
            onClick={() => handlePageChange(num + 1)}
          >
            {num + 1}
          </button>
        ))}
        <button
          className="page-item"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </>
  );
};

export default Mainbar;
