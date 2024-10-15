import { useState } from "react";
import useBookStore from "../store/useBookStore";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const setSearchQuery = useBookStore((state) => state.setSearchQuery);
  const fetchBooks = useBookStore((state) => state.fetchBooks);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setSearchQuery(input); // Updates search query state
    fetchBooks(input); // Initiates the fetch based on the query
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center space-x-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for books..."
        className="p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
