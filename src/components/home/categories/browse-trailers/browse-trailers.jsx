import React from "react";
import trailers from "./trailers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BrowseTrailer = (props) => {
  return (
    <div className="trailer px-9 lg:px-[139px] mb-[50px] lg:mb-11">
      <h1 className="font-chivo font-black text-lg lg:text-2xl mb-5 lg:mb-10 text-white text-left">
        BROWSE TRAILERS
      </h1>
      <div className="category">
        <Swiper
          spaceBetween={50}
          slidesPerView={props.width > 375 ? 4.5 : 1.99}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {trailers.map((item) => {
            return (
              <SwiperSlide>
                <div
                  className={
                    item.color === "horror"
                      ? "box rounded-xl bg-gradient-to-t from-horror to-black-custom w-fit flex flex-col gap-6"
                      : item.color === "thriller"
                      ? "box rounded-xl bg-gradient-to-t from-thriller to-black-custom w-fit flex flex-col gap-6"
                      : item.color === "comedy"
                      ? "box rounded-xl bg-gradient-to-t from-comedy to-black-custom w-fit flex flex-col gap-6"
                      : "box rounded-xl bg-gradient-to-t from-romance to-black-custom w-fit flex flex-col gap-6"
                  }
                >
                  <img
                    src={require(`../../../../assets/${item.icon}`)}
                    alt="icon"
                    className="lg:w-fit mt-4 max-w-11 max-h-11 mx-auto lg:mt-6"
                  />
                  <h1 className="block w-[160px] lg:w-[238px] mb-3 lg:mb-6 font-DM-Sans font-bold text-sm lg:text-lg text-white">
                    {item.title}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BrowseTrailer;
