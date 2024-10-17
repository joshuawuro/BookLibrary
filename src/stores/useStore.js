import { create } from "zustand";

const API_KEY = "AIzaSyBYQxNMuOl0hjbZlOtJI6PJHEB_fJFAq5E"; // Replace with your Google Books API key

const useStore = create((set) => ({
  searchResults: [],

  // Search for books using the Google Books API
  searchBooks: async (query) => {
    console.log("Searching for:", query);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set({ searchResults: data.items || [] }); // Set search results (Google Books returns `items`)
    } catch (error) {
      console.error("Failed to fetch search results:", error);
      set({ searchResults: [] }); // Clear search results on error
    }
  },
}));

export default useStore;
