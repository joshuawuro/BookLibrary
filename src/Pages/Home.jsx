import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const API_KEY = "AIzaSyBYQxNMuOl0hjbZlOtJI6PJHEB_fJFAq5E";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchQuery) {
      fetchBooks(searchQuery);
    }
  }, [searchQuery]);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${API_KEY}`
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
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Welcome to BookIsh
      </h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
