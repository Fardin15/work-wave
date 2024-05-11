import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "px-4 py-2 border bg-white text-black font-semibold text-lg mr-4 rounded-lg"
              : "px-4 py-2 font-normal text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-jobs"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "px-4 py-2 border bg-white text-black font-semibold text-lg mr-4 rounded-lg"
              : "px-4 py-2 font-normal text-lg"
          }
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/applied-jobs"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "px-4 py-2 border bg-white text-black font-semibold text-lg mr-4 rounded-lg"
              : "px-4 py-2 font-normal text-lg"
          }
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-job"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "px-4 py-2 border bg-white text-black font-semibold text-lg mr-4 rounded-lg"
              : "px-4 py-2 font-normal text-lg"
          }
        >
          Add A Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-jobs"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "px-4 py-2 border bg-white text-black font-semibold text-lg mr-4 rounded-lg"
              : "px-4 py-2 font-normal text-lg"
          }
        >
          My Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "px-4 py-2 border bg-white text-black font-semibold text-lg mr-4 rounded-lg"
              : "px-4 py-2 font-normal text-lg"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  // toggling theme light and dark
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handelTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-[#13072E]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="/public/Work Wave.png"
          alt=""
        />
        <p className="text-xl">WorkWave</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label className="cursor-pointer grid place-items-center mr-4">
          <input
            onChange={handelTheme}
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {user ? (
          <div className="flex justify-center items-center gap-3">
            <div className="dropdown dropdown-hover dropdown-end z-50">
              <img
                referrerPolicy="no-referrer"
                tabIndex={0}
                role="button"
                className="rounded-full w-10 h-10 tooltip tooltip-bottom"
                data-tip="hello"
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://i.postimg.cc/ZKVHTsbW/profile.jpg"
                }
                alt=""
              />
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#3F2182]"
              >
                <li>
                  <a className="text-white">
                    {user.displayName ? user?.displayName : "User"}
                  </a>
                </li>
              </ul>
            </div>
            <NavLink className="btn mr-4" onClick={logOut}>
              Logout
            </NavLink>
          </div>
        ) : (
          <>
            <NavLink to="/login" className="btn mr-4">
              Login
            </NavLink>
            <NavLink to="/signup" className="btn">
              SignUp
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
