import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBookStore from "../store/useBookStore"; // Assuming you're using Zustand for state

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const { fetchBookById, selectedBook, loading, error } = useBookStore(
    (state) => ({
      fetchBookById: state.fetchBookById,
      selectedBook: state.selectedBook,
      loading: state.loading,
      error: state.error,
    })
  );

  useEffect(() => {
    if (id) {
      fetchBookById(id); // Fetch book details based on the ID
    }
  }, [id, fetchBookById]);

  if (loading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
        <p className="mt-3 text-blue-700">Loading.. Please wait</p>
      </div>
    );
  }

  if (error) {
    return <p>Error loading book details: {error}</p>;
  }

  if (!selectedBook) {
    return <p>No details available for this book.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">{selectedBook.title}</h2>
      <img
        src={`https://covers.openlibrary.org/b/id/${
          selectedBook.covers ? selectedBook.covers[0] : "placeholder"
        }-L.jpg`}
        alt={selectedBook.title}
        className="w-full h-96 object-cover mb-4"
      />
      <p>
        Author:{" "}
        {selectedBook.authors
          ? selectedBook.authors.map((author) => author.name).join(", ")
          : "Unknown"}
      </p>
      <p>
        Publisher:{" "}
        {selectedBook.publishers ? selectedBook.publishers[0].name : "Unknown"}
      </p>
      <p>Published Year: {selectedBook.first_publish_year}</p>
      <p>ISBN: {selectedBook.isbn ? selectedBook.isbn[0] : "N/A"}</p>
      <p>
        Description:{" "}
        {selectedBook.description
          ? typeof selectedBook.description === "string"
            ? selectedBook.description
            : selectedBook.description.value
          : "No description available."}
      </p>
    </div>
  );
};

export default BookDetails;
