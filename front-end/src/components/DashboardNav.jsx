import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/userStore";
import { useEffect } from "react";
import { getUserData } from "../modules/fetch";

export function DashboardNav() {
  const navigate = useNavigate();
  const { user, setUser, error, loading, setError } = useUserStore();
  const navbarList = [
    { to: `/dashboard`, text: "Dashboard" },
    { to: `/collection`, text: "Collection" },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          // Handle the case where there's no token (e.g., redirect to login)
          setError("Unauthorized. Please log in.");
          navigate("/login");
          return;
        }
        const userData = await getUserData();
        // console.log(userData);
        setUser(userData);
      } catch (e) {
        console.error("Error verifying token:", e);
        setError("Error verifying token. Please try again.");
        window.alert(error);
      }
    };
    getData();
  }, [setUser, setError]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>{error}</p>;
  }
  return (
    <>
      <nav className="flex justify-between bg-primary">
        <NavLink
          to="/dashboard"
          className=" text-2xl font-bold m-4 text-accent-content"
        >
          PrivaLib
        </NavLink>
        <div className="flex items-center ">
          <ul className="flex">
            {navbarList.map((item, index) => (
              <li
                className="text-accent-content mx-3 font-semibold hover:bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg px-2"
                key={index}
              >
                <NavLink to={item?.to}>{item.text}</NavLink>
              </li>
            ))}
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
              className="btn btn-xs mr-4 btn-outline btn-error"
            >
              Logout
            </button>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );

  // return (
  //   <>
  //     <h1>testing</h1>
  //     <Outlet />
  //   </>
  // );
}
