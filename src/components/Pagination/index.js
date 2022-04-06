import React from 'react';

function Pagination({
  page,
  total,
  onPageChange,
}) {
  const handlePrevButtonClick = () => {
    onPageChange(page - 1 >= 0 ? page - 1 : 0)
  };
  const handleNextButtonClick = () => {
    onPageChange(page + 1 <= total ? page + 1 : total);
  }
  return (
    <div>
      <button
        disabled={page <= 0}
        onClick={handlePrevButtonClick}
      >
        {"<"}
      </button>
      <button
        disabled={page >= total}
        onClick={handleNextButtonClick}
      >
        {">"}
      </button>
    </div>
  )
}

export default Pagination;