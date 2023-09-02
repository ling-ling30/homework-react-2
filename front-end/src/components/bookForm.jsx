import { useEffect, useState } from "react";
import { createBook, deleteBook, editBook } from "../modules/fetch";
import { useNavigate } from "react-router-dom";
export function BookForm(bookData) {
  const [selectedImage, setSelectedImage] = useState(null);
  // console.log(bookData.bookData);
  const navigate = useNavigate();
  useEffect(() => {
    if (bookData?.bookData?.image) {
      setSelectedImage(`http://localhost:8000/${bookData?.bookData?.image}`);
    }
  }, [bookData?.bookData]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    if (bookData?.bookData) {
      try {
        await editBook(
          bookData?.bookData.id,
          formData.get("title"),
          formData.get("author"),
          formData.get("publisher"),
          parseInt(formData.get("year")),
          parseInt(formData.get("pages"))
        );
        window.alert("edit is successful");
      } catch (error) {
        console.log(error);
      }
      return;
    }
    try {
      formData.append("image", selectedImage);
      await createBook(formData);
      event.target.reset();
      window.alert("Book created successfully");
      navigate("/collection");
      setSelectedImage("");
    } catch (error) {
      console.log(error);
      window.alert("something is wrong");
    }
  }

  return (
    <div className="flex justify-center m-5">
      <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Title: </span>
        </label>
        <input
          defaultValue={bookData?.bookData?.title}
          required
          name="title"
          type="text"
          placeholder="Enter Title "
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Author: </span>
        </label>
        <input
          defaultValue={bookData?.bookData?.author}
          name="author"
          type="text"
          placeholder="Enter Author's Name "
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Publisher: </span>
        </label>
        <input
          defaultValue={bookData?.bookData?.publisher}
          name="publisher"
          required
          type="text"
          placeholder="Enter Publisher "
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Year: </span>
        </label>
        <input
          defaultValue={bookData?.bookData?.year}
          name="year"
          required
          type="number"
          placeholder="Enter Publish Year "
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Page: </span>
        </label>
        <input
          defaultValue={bookData?.bookData?.pages}
          name="pages"
          required
          type="text"
          placeholder="Enter Pages "
          className="input input-bordered w-full max-w-xs"
        />
        {selectedImage && <img src={selectedImage} />}
        {!bookData?.bookData?.image && (
          <label className="label">
            <span className="label-text">Cover Image: </span>
            <input
              name="image"
              accept="image/*"
              required
              type="file"
              className="file-input w-full max-w-xs"
              onChange={(e) => {
                const file = e.target.files[0];
                setSelectedImage(URL.createObjectURL(file));
              }}
            />
          </label>
        )}
        <div className=" flex justify-between ">
          <button type="submit" className="btn btn-neutral my-4 ">
            {bookData?.bookData ? "Edit Book" : "Create Book"}
          </button>
          {bookData?.bookData ? (
            <button
              onClick={async () => {
                try {
                  await deleteBook(bookData.bookData.id);
                  window.alert("Book deleted");
                  navigate("/collection");
                } catch (error) {
                  console.log(error);
                  window.alert("Error deleting");
                }
              }}
              className="btn btn-error my-4"
            >
              delete
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}
