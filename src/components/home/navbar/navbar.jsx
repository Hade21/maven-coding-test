import React from "react";
import Logo from "../../../assets/Group 77 mini.svg";
import SearchIcon from "../../../assets/magnifying-glass.svg";

const Navbar = () => {
  return (
    <div className="navbar h-[100px] bg-black-custom px-[139px] flex items-center justify-between">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu font-chivo font-black text-base text-white">
        <ul className="flex gap-10">
          <li>
            <a href="#">MOVIES</a>
          </li>
          <li>
            <a href="#">SERIES</a>
          </li>
          <li>
            <a href="#">CATEGORIES</a>
          </li>
          <li>
            <a href="#">WATCHLIST</a>
          </li>
          <li>
            <a href="#">MY ACCOUNT</a>
          </li>
          <li>
            <a href="#">
              <img src={SearchIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
