import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await response.json();
      setBook(data);
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <p>Loading book details...</p>;
  }

  const { volumeInfo } = book;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{volumeInfo.title}</h1>
      <p className="text-sm">{volumeInfo.authors?.join(", ")}</p>
      <p>{volumeInfo.description}</p>
      {/* Display more book details as needed */}
    </div>
  );
};

export default BookDetails;
