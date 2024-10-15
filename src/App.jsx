import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BookDetails from "./components/BookDetails";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import Footer component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>
        <Footer /> {/* Add Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
