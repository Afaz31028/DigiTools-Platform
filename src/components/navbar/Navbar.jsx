import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 w-full md:max-w-9/12 mx-auto flex justify-between items-center py-5">
        <div className="md:hidden">
          <div>
            <div>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li><a>Products</a></li>
                  <li><a>Features</a></li>
                  <li><a>Pricing</a></li>
                  <li><a>Testimonials</a></li>
                  <li><a>FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <h1 className="text-4xl font-extrabold text-[#4F39F6]">DigiTools</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 font-semibold">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <CiShoppingCart />
          <a className="font-semibold" href="">
            Login
          </a>
          <button className="px-5 py-2 bg-[#4F39F6] rounded-3xl text-base-100">
            Get Started
          </button>
        </div>
      </div>
      <hr className="text-gray-300" />
    </div>
  );
};

export default Navbar;
