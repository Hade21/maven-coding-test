import React from "react";
import star from "../../../../assets/star.svg";

const MostViewed = (props) => {
  return (
    <div className="container text-white flex ">
      <h1 className="font-chivo font-black text-[32px]">
        {props.number < 9 ? `0${props.number + 1}.` : `${props.number + 1}.`}
      </h1>
      <div className="img w-[101px] h-[148px] bg-light-grey ml-8 mr-5 rounded-lg">
        <img
          src="../../../../assets/movies/speechless.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="title text-left">
        <h3 className="font-DM-Sans font-bold text-lg">{props.title}</h3>
        <div className="rating flex gap-3 mt-[14px]">
          <img src={star} alt="Icon Star" />
          <p className="font-DM-Sans font-normal text-lg">{props.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default MostViewed;
