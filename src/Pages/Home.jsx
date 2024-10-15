import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import useBookStore from "../store/useBookStore";

const Home = () => {
  const { searchQuery, currentPage, fetchBooks } = useBookStore();

  // Fetch books whenever the search query or page changes
  useEffect(() => {
    if (searchQuery) {
      fetchBooks(searchQuery, currentPage);
    }
  }, [searchQuery, currentPage, fetchBooks]);

  return (
    <div>
      <main className="p-4">
        <SearchBar />
        <BookList />
      </main>
    </div>
  );
};

export default Home;
