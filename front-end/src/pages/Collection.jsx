import { useEffect, useState } from "react";
import { getAllBooks } from "../modules/fetch";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

// export function Collection() {
//   const { books, setBooks } = useState([]);
//   useEffect(() => {
//     const getBooks = async () => {
//       const books = await getAllBooks();
//       console.log(books);
//     };
//     const data = getBooks();
//     setBooks(data);
//   }, []);
//   return (
//     <div>
//       <h1>test</h1>
//     </div>
//   );
// }

export function Collection() {
  // Declare a state variable named "books" with an initial empty array
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, [setBooks]);
  console.log(books);
  return (
    <>
      <div className="mx-4 mt-7">
        <Link to="/books" className="btn btn-outline btn-info">
          Add Book
        </Link>
      </div>
      <div className="bg-base-100 flex gap-4 flex-wrap justify-center">
        {books?.map((book) => {
          return <Card key={book.id} {...book} />;
        })}
      </div>
    </>
  );
}
