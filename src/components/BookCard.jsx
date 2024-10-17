import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, volumeInfo } = book;
  const title = volumeInfo.title || "No Title Available";
  const authors = volumeInfo.authors
    ? volumeInfo.authors.join(", ")
    : "Unknown Author";
  const thumbnail = volumeInfo.imageLinks?.thumbnail || "default-image-url.jpg"; // Add a default image if no thumbnail

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Link to={`/book/${id}`}>
        <img src={thumbnail} alt={title} className="w-full h-auto mb-4" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{authors}</p>
      </Link>
    </div>
  );
};

export default BookCard;
