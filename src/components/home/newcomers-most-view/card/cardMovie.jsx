import React, { useState } from "react";
import Star from "../../../../assets/star.svg";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover((previousState) => !previousState);
  }
  function mouseLeave() {
    setHover((previousState) => !previousState);
  }

  return (
    <Link to="/preview">
      <div className="card text-left">
        <div
          className="thumbnail w-[241px] h-[354px] rounded-lg"
          onMouseEnter={handleHover}
          onMouseLeave={mouseLeave}
        >
          <img
            src={require(`../../../../assets/movies/${props.thumbnail}.jpg`)}
            alt="thumbnail"
            className={
              hover
                ? "rounded-lg w-full h-full object-cover opacity-20 transition-opacity"
                : "rounded-lg w-full h-full object-cover cursor-pointer"
            }
          />
          <div
            className={
              hover
                ? "text animate-fadeIN w-[241px] h-[354px] px-6 pt-8 pb-4 relative -top-[354px] flex flex-col items-center"
                : "hidden"
            }
          >
            <p className="font-DM-Sans font-normal text-sm leading-[18px] text-white text-center">
              {props.desc}
            </p>
            <a
              href="#"
              className="px-[18px] py-[10px] rounded-full bg-light-cyan text-white font-DM-Sans font-bold text-base mt-[26px] mb-4"
            >
              View Info
            </a>
            <a href="#" className="font-DM-Sans font-bold text-base text-white">
              Watch Trailer
            </a>
          </div>
        </div>
        <h3 className="font-DM-Sans font-bold text-lg text-white">
          {props.title}
        </h3>
        <div className="rating">
          <img src={Star} alt="" />
          <p className="font-DM-Sans font-normal text-lg text-white">
            {props.rating}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
