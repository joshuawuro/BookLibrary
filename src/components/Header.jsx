import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  return (
    <>
      <header className="bg-blue-600 text-white py-4 text-center flex flex-row align-middle justify-around">
        <h1 className="text-xl font-bold">
          <Link to="/">
            {" "}
            {/* Link to home */}
            Book Library
          </Link>
        </h1>
        <div className="flex flex-row align-middle justify-center text-xl font-bold">
          <li className="list-none mr-3">
            <Link to="/">
              {" "}
              {/* Link to Home page */}
              Home
            </Link>
          </li>
          <li className="list-none mr-3">
            <Link to="/about">
              {" "}
              {/* Link to About page */}
              About
            </Link>
          </li>
        </div>
      </header>
    </>
  );
}

export default Header;
