import React from "react";
import star from "../../../../assets/star.svg";

const SlidePreview = (props) => {
  return (
    <div className="slide w-[350px] h-[165px] lg:w-[95%] lg:h-[590px] rounded-2xl shadow-slide-shadow m-6">
      <img
        src={require(`../../../../assets/movies/${props.thumbnail}.jpg`)}
        alt="preview"
        className="w-full h-full rounded-2xl object-cover object-top"
      />
      <div className="background bg-gradient-to-t from-black-custom to-transparent w-full h-full rounded-2xl -top-[165px] lg:-top-[590px] relative"></div>
      <div className="text text-white text-left pl-5 lg:pl-[83px] -top-[330px] lg:-top-[1180px] lg:h-[590px] relative lg:pt-[49px] lg:pb-[72px] flex flex-col justify-between">
        <h1 className="font-chivo font-black text-2xl tracking-widest lg:block hidden">
          TOP PICKS
        </h1>
        <div className="movie-detail">
          <h1 className="font-DM-Sans font-bold text-[52px] lg:block hidden">
            {props.title}
          </h1>
          <p className="font-DM-Sans font-normal text-base w-[717px] lg:block hidden">
            {props.desc}
          </p>
          <div className="detail mt-[109px] lg:mt-6 font-DM-Sans font-bold text-base flex gap-4 lg:gap-[30px] items-center">
            <a
              href="#"
              className="px-[18px] py-[7px] lg:px-[30px] lg:py-[10px] bg-light-cyan lg:text-base text-sm rounded-full"
            >
              View Info
            </a>
            <a href="#" className="lg:text-base text-sm">
              Watch Trailer
            </a>
            <a href="#" className="lg:block hidden">
              + Watchlist
            </a>
            <a
              href="#"
              className="font-normal text-lg lg:flex gap-3 items-center hidden"
            >
              <img src={star} alt="" />
              {props.rating}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePreview;
