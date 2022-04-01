import React, { useState } from "react";
import Logo from "../../../assets/Group 77 mini.svg";
import SearchIcon from "../../../assets/magnifying-glass.svg";
import Hamburger from "../../../assets/Mask Group 48.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [modal, setModal] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  function handleHover1() {
    setHover1(!hover1);
  }
  function handleHover2() {
    setHover2(!hover2);
  }
  function handleHover3() {
    setHover3(!hover3);
  }
  function handleHover4() {
    setHover4(!hover4);
  }
  function handleHover5() {
    setHover5(!hover5);
  }

  function handleModal() {
    setModal(!modal);
  }
  return (
    <div className="navbar h-[100px] bg-black-custom px-9 lg:px-[139px] flex items-center justify-between fixed -top-1 z-10 w-full">
      <div className="logo pl-4 md:pl-0">
        <img src={Logo} alt="" />
      </div>
      <div className="menu font-chivo font-black text-base text-white flex gap-[18px]">
        <ul
          className={
            props.width > 375
              ? "flex gap-4 justify-center"
              : modal
              ? "relative w-[calc(100vw+52px)] top-[280px] -left-[52px] bg-black-custom h-[calc(100vh+100px)]"
              : "hidden"
          }
        >
          <li className="px-2 text-center">
            <div
              className={
                hover1
                  ? "bg-hover animate-shadow bg-moderate-blue mx-auto w-full h-1/2 relative top-[50%]"
                  : "opacity-0 bg-moderate-blue mx-auto w-full h-1/2 relative top-[50%]"
              }
            ></div>
            <a
              href="#"
              className="relative px-2 -top-[50%]"
              onMouseLeave={handleHover1}
              onMouseEnter={handleHover1}
            >
              MOVIES
            </a>
          </li>
          <li className="px-2">
            <div
              className={
                hover2
                  ? "bg-hover animate-shadow bg-moderate-blue w-full h-1/2 relative top-[50%]"
                  : "opacity-0 bg-hover bg-moderate-blue w-full h-1/2 relative top-[50%]"
              }
            ></div>
            <a
              href="#"
              className="relative px-2 -top-[50%]"
              onMouseEnter={handleHover2}
              onMouseLeave={handleHover2}
            >
              SERIES
            </a>
          </li>
          <li className="px-2">
            <div
              className={
                hover3
                  ? "bg-hover animate-shadow bg-moderate-blue w-full h-1/2 relative top-[50%]"
                  : "opacity-0 bg-hover bg-moderate-blue w-full h-1/2 relative top-[50%]"
              }
            ></div>
            <a
              href="#"
              className="relative px-2 -top-[50%]"
              onMouseEnter={handleHover3}
              onMouseLeave={handleHover3}
            >
              CATEGORIES
            </a>
          </li>
          <li className="px-2">
            <div
              className={
                hover4
                  ? "bg-hover animate-shadow bg-moderate-blue w-full h-1/2 relative top-[50%]"
                  : "opacity-0 bg-hover bg-moderate-blue w-full h-1/2 relative top-[50%]"
              }
            ></div>
            <a
              href="#"
              className="relative px-2 -top-[50%]"
              onMouseEnter={handleHover4}
              onMouseLeave={handleHover4}
            >
              WATCHLIST
            </a>
          </li>
          <li className="px-2">
            <div
              className={
                hover5
                  ? "bg-hover animate-shadow bg-moderate-blue w-full h-1/2 relative top-[50%]"
                  : "opacity-0 bg-hover bg-moderate-blue w-full h-1/2 relative top-[50%]"
              }
            ></div>
            <a
              href="#"
              className="relative px-2 -top-[50%]"
              onMouseEnter={handleHover5}
              onMouseLeave={handleHover5}
            >
              MY ACCOUNT
            </a>
          </li>
        </ul>
        <img src={SearchIcon} alt="search" className="cursor-pointer" />
        <Link to="/menu">
          <img
            src={Hamburger}
            alt="hamburger"
            className="cursor-pointer md:hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
