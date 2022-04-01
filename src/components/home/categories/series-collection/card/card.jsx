import React from "react";
import star from "../../../../../assets/star.svg";

const Card = (props) => {
  return (
    <div className="card w-fit">
      <img
        src={require(`../../../../../assets/movies/${props.thumbnail}.jpg`)}
        alt="thumbnail"
        className="w-[241px] h-[354px] rounded-xl"
      />
      <h1 className="font-DM-Sans font-bold text-lg text-white text-left mt-4 mb-3">
        {props.title}
      </h1>
      <p className="flex gap-3 items-center text-white font-DM-Sans font-normal text-lg">
        <img src={star} /> {props.rating}
      </p>
    </div>
  );
};

export default Card;
