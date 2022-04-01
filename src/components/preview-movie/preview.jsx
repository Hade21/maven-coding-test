import React, { useState } from "react";
import star from "../../assets/big-star.svg";
import arrow from "../../assets/arrow (1).svg";
import play from "../../assets/Group 192.svg";
import Footer from "../home/footer/footer";
import { Link } from "react-router-dom";

const Preview = (props) => {
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(!hover);
  }
  return (
    <div className="preview bg-black-custom text-white w-full">
      <div
        className="image-preview w-full h-[193px] lg:h-[702px] relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img
          src={require("../../assets/movies/vincenzo-slide.jpg")}
          alt=""
          className={
            props.width > 375
              ? "w-full h-full object-cover object-top"
              : "w-full h-[193px] relative top-[70px] object-cover object-top"
          }
        />
        <div className="overlay relative h-[193px] lg:h-full -top-full text-white">
          <img
            src={require("../../assets/movies/son-jong-ki.jpg")}
            alt="hover-bg"
            className={
              props.width > 375
                ? hover
                  ? "w-full h-full object-cover object-top animate-faded"
                  : "hidden"
                : "hidden"
            }
          />
          <div
            className={
              props.width > 375
                ? hover
                  ? "overlay-bg h-full relative -top-full bg-gradient-to-t from-light-cyan to-transparents opacity-40 transition-opacity"
                  : "hidden"
                : "hidden"
            }
          ></div>
          <div
            className={
              props.width > 375
                ? hover
                  ? "attributes h-full relative -top-[200%] animate-faded"
                  : "h-full"
                : "bg-black-custom relative h-[70px] px-9 items-center flex gap-[22px] w-full"
            }
          >
            <Link to="/beranda">
              <img
                src={arrow}
                alt=""
                className={
                  props.width > 375 ? "w-6 mt-[74px] ml-[54px]" : "w-6 h-4"
                }
              />
            </Link>
            <div
              className={
                props.width > 375
                  ? hover
                    ? "title mt-14 animate-faded"
                    : "hidden"
                  : "flex justify-between w-full items-center"
              }
            >
              <h1
                className={
                  props.width > 375
                    ? "font-DM-Sans font-bold text-[30px]"
                    : "font-DM-Sans font-bold text-lg"
                }
              >
                Vincenzo
              </h1>
              <p
                className={
                  props.width > 375
                    ? "font-DM-Sans font-bold text-[20px]"
                    : "font-DM-Sans font-bold text-sm"
                }
              >
                20 Eps
              </p>
            </div>
            <div
              className={
                hover
                  ? "mt-[96px] animate-faded"
                  : "watch mt-[155px] text-center"
              }
            >
              <h3
                className={
                  props.width > 375
                    ? hover
                      ? "hidden"
                      : "font-DM-Sans font-bold text-[32px]"
                    : "hidden"
                }
              >
                Watch Trailer
              </h3>
              <button
                className={
                  props.width > 375
                    ? hover
                      ? "font-DM-Sans font-bold text-base rounded-full px-10 py-[10px] mt-[183px] bg-light-cyan animate-faded"
                      : "hidden"
                    : "hidden"
                }
              >
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={play}
        alt=""
        className={
          props.width > 375
            ? hover
              ? "mx-auto cursor-pointer relative -top-[calc(56.4vh)]"
              : "mx-auto mt-6 cursor-pointer relative -top-[calc(60vh)]"
            : "relative -top-[120%] left-[calc(50%-24px)] w-12"
        }
      />
      <div className="detail mx-9 relative top-[70px] lg:mx-[139px] text-left flex flex-col-reverse lg:flex-row mt-8 lg:mt-10 mb-[90px]">
        <div className="detail-movie w-full lg:w-2/3 mt-[38px] lg:mt-0">
          <div className="about">
            <h1 className="font-chivo font-black text-lg lg:text-2xl tracking-wide">
              ABOUT VINCENZO
            </h1>
            <p className="font-DM-Sans font-normal text-sm lg:text-base mt-1 lg:mt-4">
              Release Date 20 Feb 2021 | 20eps | Comedy, Crime, Romance |
            </p>
          </div>
          <div className="cast mt-5 lg:mt-10">
            <h1 className="font-chivo font-black text-sm lg:text-base text-detail-title tracking-wide">
              CAST
            </h1>
            <p className="font-DM-Sans font-bold italic text-sm lg:text-base mt-2">
              Song Jong-ki, Jeon Yeo-bin, Taecyeon
            </p>
          </div>
          <div className="director mt-[10px] lg:mt-5">
            <h1 className="font-chivo font-black text-sm lg:text-base text-detail-title tracking-wide">
              DIRECTOR
            </h1>
            <p className="font-DM-Sans font-bold italic text-sm lg:text-base mt-2">
              Hui-won Kim
            </p>
          </div>
          <div className="synopsis mt-[10px] lg:mt-5">
            <h1 className="font-chivo font-black text-sm lg:text-base text-detail-title tracking-wide">
              SYNOPSIS
            </h1>
            <p className="font-DM-Sans font-normal text-sm lg:text-base mt-2 mb-16 lg:mb-0">
              At the age of 8, Park Joo-Hyeong went to Italy after he was
              adopted. He is now an adult and has the name of Vincenzo Cassano
              (Song Jong-Ki). He is a lawyer, who works for the mafia as a
              consigliere.Because of a war between mafia groups, he flees to
              South Korea.
              <br />
              Curabitur non nulla sit ametnisl tempus convallisquis ac lectus.
              Curabitur non nulla sit ametnisl tempus convallisquis ac
              lectus.Maurin blandit aliquet elit, eget tincidunt nibh pulvinar
              a. Cras ultricies ligula sed magna dictum porta. Curabitur arcu
              erat, accumsan it imperdiet et, porttitor at sem. Curabitur non
              nulla sit ametnisl tempus convallisquis ac lectus.
              <br /> <br />
              Set porttitor lectus nibh. Nulla quis lorem ut libero malesuada
              feugiat. Curabitur aliquet quam id dui posuere blandit. Lorem
              impsum dolor sit amet, consectetur adipiscing elit. Muris sbandit
              aliquet elit, eget tindicunt nibh pulvinar a. Quisque veli nise,
              pretium ut lacinia in, elementum id enim.
            </p>
          </div>
        </div>
        <div className="rating w-full lg:w-1/3 lg:pl-[112px]">
          <h1 className="font-chivo font-black text-lg lg:text-2xl tracking-wide">
            RATE
          </h1>
          <div className="wrapper flex justify-between items-start lg:flex-col">
            <div className="wrapper">
              <div className="star lg:mt-3 flex gap-3 lg:gap-[30px] items-center">
                <img src={star} alt="rate" className="w-7 lg:w-14" />
                <p className="font-DM-Sans font-normal text-[28px] lg:text-[46px]">
                  8.5
                </p>
              </div>
              <p className="font-DM-Sans font-normal text-base mt-1 lg:mt-[18.5px]">
                199.203 voters
              </p>
            </div>
            <button className="font-DM-Sans font-bold text-sm lg:text-base px-6 py-[10px] bg-light-cyan lg:mt-[21px] rounded-full">
              Give Rating
            </button>
          </div>
        </div>
      </div>
      <div className="footer relative -top-6">
        <Footer />
      </div>
    </div>
  );
};

export default Preview;
