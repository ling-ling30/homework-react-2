import { register } from "../modules/fetch";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await register({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    window.alert("Registered");
    navigate("/");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-orange-100 ">
      <form
        className="flex flex-col items-center bg-orange-100 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <fieldset className="flex flex-col w-70 h-70 bg-green-500 m-3 p-3 rounded-md ">
          <h1 className="text-center">Register</h1>
          <label className="text-sm" htmlFor="text">
            Name:
          </label>
          <input type="name " name="name" />
          <label className="text-sm" htmlFor="email">
            Email:
          </label>
          <input type="email" name="email" />
          <label className="text-sm" htmlFor="password">
            Password :{" "}
          </label>
          <input type="password" name="password" />
          <button
            className="m-2 my-5 bg-orange-100 rounded-md text-sm"
            type="submit"
          >
            {" "}
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
}
