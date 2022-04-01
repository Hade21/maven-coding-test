import React from "react";
import { itemsMostViewed } from "../card/cards-item";
import MostViewed from "../card/mostViewedCard";

const Mostviewed = () => {
  return (
    <div className="most-viewed lg:w-[45%] bg-black-custom lg:bg-gradient-to-t lg:from-dark-cyan lg:to-slate-900 w-full px-9 py-9 lg:pr-[139px] lg:py-[68px]">
      <div className="wrapper lg:pl-[67px] text-left">
        <h1 className="text-white font-chivo font-black text-lg lg:text-2xl">
          MOST VIEWED MOVIE
        </h1>
        <div className="wrapper mt-5 flex flex-col gap-[19px]">
          {itemsMostViewed.map((item, index) => {
            return (
              <MostViewed
                number={index}
                title={item.title}
                rating={item.rating}
                thumbnail={item.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mostviewed;
