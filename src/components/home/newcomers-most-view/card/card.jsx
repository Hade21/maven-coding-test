import React from "react";
import Star from "../../../../assets/star.svg";

const CardMovie = (props) => {
  return (
    <div className="card text-left">
      <div
        className={`thumbnail w-[241px] h-[354px] bg-${props.thumbnail} bg-cover rounded-lg`}
      ></div>
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
  );
};

export default CardMovie;
