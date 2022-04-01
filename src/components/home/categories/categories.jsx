import React from "react";
import BrowseTrailer from "./browse-trailers/browse-trailers.jsx";
import SeriesCollection from "./series-collection/seriesCollection.jsx";
import items from "./slidePreview/items.js";
import SlidePreview from "./slidePreview/slidePreview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories = (props) => {
  return (
    <div className="wrapper bg-black-custom pb-20 lg:pb-[178px] relative top-[95px]">
      <h1 className="text-white text-left px-9 pt-16 font-chivo text-lg font-black md:hidden">
        TOP PICKS
      </h1>
      <div className="top-picks lg:pt-[49px] pb-24">
        <Swiper
          spaceBetween={1}
          slidesPerView={props.width > 375 ? 1.06 : 1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item) => {
            return (
              <SwiperSlide>
                <SlidePreview
                  title={item.title}
                  thumbnail={item.thumbnail}
                  desc={item.desc}
                  rating={item.rating}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <BrowseTrailer width={props.width} />
      <SeriesCollection width={props.width} />
    </div>
  );
};

export default Categories;
