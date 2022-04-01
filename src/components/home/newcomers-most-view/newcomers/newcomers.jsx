import React from "react";
import { itemsNewcomers } from "../card/cards-item";
import CardMovie from "../card/cardMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Newcomers = (props) => {
  return (
    <div className="newcomers w-full lg:w-[55%] bg-gradient-to-t from-dark-cyan to-slate-900 px-9 py-[42px] lg:pr-0 lg:pl-[139px] lg:py-[68px]">
      <h1 className="font-chivo font-black text-white text-2xl text-left mb-5">
        NEWCOMERS
      </h1>
      <div className="wrapper">
        <Swiper
          spaceBetween={1}
          slidesPerView={props.width > 375 ? 2.35 : 1.2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {itemsNewcomers.map((item) => {
            return (
              <SwiperSlide>
                <CardMovie
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  thumbnail={item.thumbnail}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Newcomers;
