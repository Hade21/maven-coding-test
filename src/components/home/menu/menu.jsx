import React from "react";
import { Link } from "react-router-dom";
import close from "../../../assets/ic_back.svg";

export default function Menu() {
  return (
    <div className="menu bg-black-custom w-full px-[41px] pt-7 animate-faded">
      <div className="back md:hidden w-full flex justify-end">
        <Link to="/beranda">
          <img src={close} alt="close" className="cursor-pointer" />
        </Link>
      </div>
      <ul className="mt-[233px] flex gap-10 flex-col pb-[278px]">
        <li>
          <a
            href="#"
            className="font-chivo font-black text-base text-white tracking-widest"
          >
            MOVIES
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-chivo font-black text-base text-white tracking-widest"
          >
            CATEGORIES
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-chivo font-black text-base text-white tracking-widest"
          >
            WATCHLIST
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-chivo font-black text-base text-white tracking-widest"
          >
            MY ACCOUNT
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-chivo font-black text-base text-white tracking-widest"
          >
            SERIES
          </a>
        </li>
      </ul>
    </div>
  );
}
