import React from "react";
import logo from "/Nest.png";
import svg from "/SVG.png";
import { NavLink } from "react-router";
function Navber() {
  const menu = (
    <div className="flex gap-[30px] items-center ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#3BB77E] font-semibold" : "text-[#253D4E]"
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-[#3BB77E] font-semibold" : "text-[#253D4E]"
        }
      >
        <li>About</li>
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-[#3BB77E] font-semibold" : "text-[#253D4E]"
        }
      >
        <li>Blog</li>
      </NavLink>

      <NavLink
        to="/contract"
        className={({ isActive }) =>
          isActive ? "text-[#3BB77E] font-semibold" : "text-[#253D4E]"
        }
      >
        <li>Contract</li>
      </NavLink>

      <NavLink
        to="/mega"
        className={({ isActive }) =>
          isActive ? "text-[#3BB77E] font-semibold" : "text-[#253D4E]"
        }
      >
        <li>Mega Menu</li>
      </NavLink>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-white fixed top-0 right-0 left-0 z-100 w-11/12 mx-auto ">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 "
            >
              {menu}
            </ul>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={logo} alt="" className="h-[52px] w-[170px] " />
            <div className="flex items-center">
              <img src={svg} alt="" />
              <p className="text-[16px] text-[#253D4E] font-bold  ">
                Hot Deals
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#3BB77E] text-white w-[98px] h-[44px] ">
            Login
          </a>
        </div>
      </div>
      ;
    </div>
  );
}

export default Navber;
