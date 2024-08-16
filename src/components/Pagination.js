const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Prev</button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            className={page + 1 === currentPage ? 'active' : ''}
            onClick={() => onPageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
      </div>
    );
  };
  
  export default Pagination;
  