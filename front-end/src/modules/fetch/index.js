import { instance } from "../axios/index";

const register = async (data) => {
  try {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const post = await instance.post("/register", userData);
    console.log("success");
    // console.log(post.status, post.data, "<<<<<<<<<<<<<<<<");
    return post.data;
  } catch (error) {
    console.log("error <<<<<<<<<<<<");
    window.alert(error.message);
    throw new Error(error || "Something went wrong");
  }
};

const login = async (email, password) => {
  try {
    const response = await instance.post("/login", { email, password });
    console.log(response);
    return response;
  } catch (error) {
    window.alert(error.message);
    console.log(error);
  }
};

const getUserData = async () => {
  try {
    const response = await instance.get("/api/verify-token");
    const userId = response.userId;
    const userData = await instance.get(`users/${userId}`);

    return { name: userData.user.name, email: userData.user.email };
  } catch (error) {
    console.error("Error verifying token:", error);
  }
};

const getAllBooks = async () => {
  try {
    const response = await instance.get("/books");

    return response.books;
  } catch (error) {
    window.alert(error.message);
    console.log(error);
  }
};

const createBook = async (formData) => {
  try {
    const response = await instance.post("/books", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
async function getBookDetailById(id) {
  try {
    const response = await instance.get(`/books/${id}`);
    // console.log(response);
    return response.book;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function editBook(id, title, author, publisher, year, pages) {
  try {
    const response = await instance.put(`/books/${id}`, {
      title,
      author,
      publisher,
      year,
      pages,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for delete book endpoint
async function deleteBook(id) {
  try {
    const response = await instance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}
export {
  getAllBooks,
  register,
  login,
  getUserData,
  createBook,
  getBookDetailById,
  editBook,
  deleteBook,
};
