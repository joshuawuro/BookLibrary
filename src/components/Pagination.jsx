import useBookStore from "../store/useBookStore";

const Pagination = () => {
  const { currentPage, totalPages, setPage, searchQuery, fetchBooks } =
    useBookStore();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
      fetchBooks(searchQuery, currentPage + 1); // Fetch books for next page
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
      fetchBooks(searchQuery, currentPage - 1); // Fetch books for previous page
    }
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
