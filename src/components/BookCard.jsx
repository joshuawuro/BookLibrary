import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  // Extract the actual key without the "/works/" part
  const bookId = book.key.replace("/works/", ""); // This will strip out "/works/"

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
        className="w-full h-60 object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
      <p className="text-sm mb-2">
        Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p className="text-sm mb-2">
        Publisher: {book.publisher ? book.publisher[0] : "Unknown"}
      </p>
      <p className="text-sm mb-4">Published Year: {book.first_publish_year}</p>

      {/* Link to the Book Details page */}
      <Link to={`/book/${bookId}`} className="text-blue-500 hover:underline">
        More Details
      </Link>
    </div>
  );
};

export default BookCard;
