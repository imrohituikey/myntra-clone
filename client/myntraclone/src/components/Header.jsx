import React from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-blue-500/10 p-6 xl:px-20 items-center justify-between">
      <div className="flex gap-16">
        <Link to="/"><img src="images/myntra_logo.webp" alt="" width={50} /></Link>
        <div className="flex gap-6 items-center">
          {["men", "women", "kids", "home & living", "beauty", "studio"].map(
            (item, index) => (
              <li className="uppercase text-sm font-semibold" key={index} >
                <a href="/">{item}</a>
              </li>
            )
          )}
        </div>
      </div>
      <div className="flex w-[50%] justify-between gap-12 items-center">
        <div className="flex items-center gap-4 w-full bg-slate-400/50 py-2 px-4 rounded-md">
          <FiSearch />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="search for products, brands and more"
          />
        </div>
        <div className="flex gap-6">
          <Link to="/profile">
            <div className="flex flex-col items-center">
              <FiUser />
              <h4>Profile</h4>
            </div>
          </Link>
          <a href="/">
            <div className="flex flex-col items-center">
              <FiHeart />
              <h4>Wishlist</h4>
            </div>
          </a>
          <Link to="/bag">
            <div className="flex flex-col items-center">
              <FiShoppingBag />
              <h4>Bag</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
