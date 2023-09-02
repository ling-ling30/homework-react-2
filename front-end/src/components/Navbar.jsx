import { NavLink, Outlet } from "react-router-dom";
import "../index.css";

export function NavBarComponent() {
  const navbarList = [
    { to: "/", text: "Home" },
    { to: "/login", text: "Login" },
  ];

  return (
    <>
      <nav className="flex justify-between bg-primary">
        <NavLink to="/" className=" text-2xl font-bold m-4 text-accent-content">
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
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
