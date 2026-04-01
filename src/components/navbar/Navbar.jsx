import React from "react";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100 max-w-9/12 mx-auto flex justify-between items-center py-5">
        <div>
            <h1 className="text-4xl font-extrabold text-[#4F39F6]">DigiTools</h1>
        </div>
        <div className="">
            <ul className="flex gap-5 font-semibold">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a>
                </li><li><a>FAQ</a></li>
            </ul>
        </div>
        <div className="flex gap-4 items-center">
            <CiShoppingCart />
            <a className="font-semibold" href="">Login</a>
            <button className="px-5 py-2 bg-[#4F39F6] rounded-3xl text-base-100">Get Started</button>
        </div>
      </div>
      <hr className="text-gray-300"/>
    </div>
  );
};

export default Navbar;
