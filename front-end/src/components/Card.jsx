import { Link } from "react-router-dom";

export function Card({ id, title, author, image, publisher, year, pages }) {
  return (
    <Link to={`/books/${id}`} className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={`http://localhost:8000/${image}`} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
          Written by : {author} || Pages :{pages}
        </p>
        <div className="card-actions"></div>
      </div>
    </Link>
  );
}
