import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BookForm } from "../components/bookForm";
import { getBookDetailById } from "../modules/fetch";

export default function EditBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);
  // console.log(book);
  return (
    <div>
      <BookForm bookData={book} />
    </div>
  );
}
