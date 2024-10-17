import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const API_KEY = "AIzaSyBYQxNMuOl0hjbZlOtJI6PJHEB_fJFAq5E"; // Google Books API Key

  useEffect(() => {
    if (searchQuery) {
      fetchBooks(searchQuery);
    }
  }, [searchQuery, currentPage]);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${
          (currentPage - 1) * booksPerPage
        }&maxResults=${booksPerPage}&key=${API_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch books");
      const data = await response.json();
      setBooks(data.items || []); // Google Books returns `items`
      setError("");
    } catch (err) {
      setError(err.message);
      setBooks([]); // Clear books on error
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page on a new search
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Welcome to BookIsh
      </h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {searchQuery && books.length === 0 ? (
          <p>No results found.</p>
        ) : (
          books.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
};

export default Home;
