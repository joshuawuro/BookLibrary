import { create } from "zustand";

const API_KEY = "YOUR_GOOGLE_BOOKS_API_KEY"; // Replace with your Google Books API key

const useStore = create((set) => ({
  trendingBooks: [],
  searchResults: [],
  currentPage: 1,

  // Search for books using the Google Books API
  searchBooks: async (query) => {
    console.log("Searching for:", query);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=10&key=${API_KEY}`
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

  // Fetch trending books using Google Books API
  fetchTrendingBooks: async () => {
    console.log("Fetching trending books...");
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=bestseller&startIndex=0&maxResults=10&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set({ trendingBooks: data.items || [] }); // Set trending books (Google Books returns `items`)
    } catch (error) {
      console.error("Failed to fetch trending books:", error);
      set({ trendingBooks: [] }); // Clear trending books on error
    }
  },
}));

export default useStore;
