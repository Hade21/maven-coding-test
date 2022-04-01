import React from "react";
import CardMovie from "../../newcomers-most-view/card/cardMovie";
import itemsSeriesCollection from "./card/card-item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SeriesCollection = (props) => {
  return (
    <div className="wrapper px-9 lg:px-[139px]">
      <h1 className="font-chivo font-black text-lg lg:text-2xl text-white text-left">
        SERIES COLLECTION
      </h1>
      <div className="card-wrapper mt-5">
        <Swiper
          spaceBetween={1}
          slidesPerView={props.width > 375 ? 4.2 : 1.2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {itemsSeriesCollection.map((item) => {
            return (
              <SwiperSlide>
                <CardMovie
                  title={item.title}
                  desc={item.desc}
                  thumbnail={item.thumbnail}
                  rating={item.rating}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SeriesCollection;
