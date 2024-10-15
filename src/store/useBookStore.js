import { create } from "zustand";

const useBookStore = create((set) => ({
  books: [],
  selectedBook: null,
  loading: false,
  error: null,
  searchQuery: "",

  // Function to set search query
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Function to fetch books based on search query
  fetchBooks: async (query) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      set({ books: data.docs, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Function to fetch book details by ID
  fetchBookById: async (id) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(`https://openlibrary.org/works/${id}.json`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch book details");
      }

      set({ selectedBook: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Clear selected book when leaving the details page
  clearSelectedBook: () => set({ selectedBook: null }),
}));

export default useBookStore;
