import React from "react";
import CardMovie from "./card/card";
import { itemsNewcomers, itemsMostViewed } from "./card/cards-item.js";
import MostViewed from "./card/mostViewedCard";

const FirstPage = () => {
  return (
    <div className="container w-screen">
      <div className="newcomers lg:w-1/2 lg:bg-gradient-to-t lg:from-dark-cyan lg:to-slate-900 w-screen pl-[139px] py-[68px]">
        <h1 className="font-chivo font-black text-white text-2xl text-left">
          NEWCOMERS
        </h1>
        <div className="wrapper flex gap-5">
          {itemsNewcomers.map((item) => {
            return (
              <CardMovie
                title={item.title}
                rating={item.rating}
                thumbnail={item.thumbnail}
              />
            );
          })}
        </div>
      </div>
      <div className="most-viewed lg:w-1/2 lg:bg-gradient-to-t lg:from-dark-cyan lg:to-slate-900 w-screen pr-[139px] py-[68px]">
        <div className="wrapper pl-[67px] text-left">
          <h1 className="text-white font-chivo font-black text-2xl">
            MOST VIEWED MOVIE
          </h1>
          <div className="wrapper mt-5 grid gap-[19px]">
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
    </div>
  );
};

export default FirstPage;
