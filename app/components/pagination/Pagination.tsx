import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-4 py-2 mx-1 rounded ${
              i === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 3 || i === currentPage + 3) {
        pageNumbers.push(
          <span key={i} className="px-4 py-2 mx-1">
            ...
          </span>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        className="px-4 py-2 mx-1 bg-gray-200 rounded"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        className="px-4 py-2 mx-1 bg-gray-200 rounded"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
