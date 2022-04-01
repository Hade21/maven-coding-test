import React from "react";
import star from "../../../../assets/star.svg";

const MostViewed = (props) => {
  return (
    <div className="container text-white flex ">
      <h1 className="font-chivo font-black text-[20px] lg:text-[32px]">
        {props.number < 9 ? `0${props.number + 1}.` : `${props.number + 1}.`}
      </h1>
      <div className="img w-24 h-[140px] lg:w-[101px] lg:h-[148px] ml-8 mr-5 rounded-lg">
        <img
          src={require(`../../../../assets/movies/${props.thumbnail}.jpg`)}
          alt="thumbnail"
          className="w-full h-full object-cover object-top rounded-lg"
        />
      </div>
      <div className="title text-left max-w-[33%]">
        <h3 className="font-DM-Sans font-bold text-base lg:text-lg">
          {props.title}
        </h3>
        <div className="rating flex gap-2 lg:gap-3 mt-[14px]">
          <img src={star} alt="Icon Star" className="w-[15px] lg:w-[22px]" />
          <p className="font-DM-Sans font-normal text-sm lg:text-lg">
            {props.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MostViewed;
