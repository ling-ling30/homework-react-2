import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContexts";
import { login } from "../modules/fetch";
import useUserStore from "../zustand/userStore";
export function Login() {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  // const { setIsLoggedIn } = useAuth();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-base-100 ">
      <form
        className="flex flex-col items-center bg-base-100 w-96 h-96 "
        onSubmit={async (e) => {
          e.preventDefault();
          const token = await login(
            e.target.email.value,
            e.target.password.value
          );
          if (token.token) {
            localStorage.setItem("token", token.token);
            window.alert("success!");
            console.log(token);
            setUser(token.data);
            navigate(`/dashboard/`);
          }
        }}
      >
        <fieldset className="flex flex-col w-96 h-96 bg-accent p-3 m-4 rounded-md ">
          <h1 className="text-center text-white m-4 text-xl font-bold">
            Login
          </h1>
          <label className="text-sm text-white" htmlFor="email">
            Email:
          </label>
          <input type="email" name="email" />
          <label className="text-sm text-white" htmlFor="password">
            Password :{" "}
          </label>
          <input type="password" name="password" />
          <button
            className=" my-5 bg-orange-100 rounded-md text-sm m-4"
            type="submit"
          >
            {""}
            Login
          </button>
          <Link to="/register" className="text-xs text-white m-4">
            {" "}
            Do not have an account?
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
