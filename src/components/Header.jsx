import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">BookIsh</Link>
        </h1>
        <nav>
          <Link to="/" className="px-4 hover:underline">
            Home
          </Link>
          <Link to="/about" className="px-4 hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
