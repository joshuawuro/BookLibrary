import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left Side - Website Info */}
          <div>
            <h3 className="text-lg font-semibold">BookIsh</h3>
            <p className="text-sm">
              Your one-stop destination for finding books and reading
              inspiration.
            </p>
            <p className="text-xs mt-1">
              &copy; 2024 BookIsh. All rights reserved.
            </p>
          </div>

          {/* Right Side - Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="flex space-x-4 mt-2">
              <li>
                <a href="https://facebook.com" className="hover:text-blue-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:text-pink-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-blue-400">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
