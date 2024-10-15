import useBookStore from "../store/useBookStore";
import BookCard from "./BookCard";
import Pagination from "./Pagination"; // Import the Pagination component
import "./Loader.css"; // Import the CSS for the loader

const BookList = () => {
  const { books, loading, error } = useBookStore();

  if (loading) {
    if (loading) {
      // Return the loader with a container for centering
      return (
        <div className="loader-container">
          <span className="loader"></span>
          <p className="mt-3 text-blue-700">Loading.. Please wait</p>
        </div>
      );
    }
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>

      {/* Add pagination below the book list */}
      <Pagination />
    </div>
  );
};

export default BookList;
