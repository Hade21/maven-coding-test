import React, { useState } from "react";
import LogoDesktop from "../../assets/Group 77.svg";
import LogoMobile from "../../assets/Group 77 mobile.svg";
import eye from "../../assets/ic_eye_disable.svg";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPass, setFocusPass] = useState(false);

  function handleFocusEmail() {
    setFocusEmail(!focusEmail);
  }
  function handleFocusPass() {
    setFocusPass(!focusPass);
  }

  return (
    <div className="login bg-mobile-login lg:bg-desktop-login w-screen h-screen bg-black text-white flex flex-col lg:flex-row lg:justify-center items-center gap-32 lg:gap-72 overflow-auto">
      <div className="left">
        <img
          src={props.width > 375 ? LogoDesktop : LogoMobile}
          alt="Astronaut-Logo"
          className="mx-auto w-fit mt-[60px] lg:mt-0"
        />
        <div className="text">
          <h1 className="font-chivo text-[38px] lg:text-[65px]">ASTRONAUT</h1>
          <h3 className="font-DM-Sans text-sm lg:text-2xl">
            Your Popcorn's Soulmate
          </h3>
        </div>
      </div>
      <div className="right">
        <form action="submit" className="sign-in flex flex-col gap-3">
          <h1 className="font-chivo text-lg lg:text-[32px]">SIGN IN</h1>
          <p className="font-DM-Sans text-sm lg:text-base">
            Let's enjoy your popcorn while you are lay down!
          </p>
          <div
            className={
              focusEmail
                ? "w-[312px] h-[50px] lg:w-[400px] lg:h-[60px] email bg-white text-light-grey flex flex-col items-start px-5 py-[11px] border-b-4 border-moderate-blue transition-colors"
                : "w-[312px] h-[50px] lg:w-[400px] lg:h-[60px] email bg-white text-light-grey flex flex-col items-start px-5 py-[11px]"
            }
          >
            <label
              htmlFor="email-input"
              className={
                focusEmail
                  ? "font-DM-Sans animate-fokus text-[10px] cursor-pointer"
                  : "font-DM-Sans animate-unfokus text-[24px] cursor-pointer w-full text-left"
              }
              onClick={handleFocusEmail}
            >
              Username/Email
            </label>
            <input
              type="email"
              id="email-input"
              className={
                focusEmail
                  ? "text-light-grey animate-dissappear focus:outline-none bg-transparent w-5/6"
                  : "hidden"
              }
              onBlur={handleFocusEmail}
            />
          </div>
          <div
            className={
              focusPass
                ? "w-[312px] h-[50px] lg:w-[400px] lg:h-[60px] password bg-white text-light-grey flex justify-between px-5 py-[11px] border-b-4 border-moderate-blue transition-colors"
                : "w-[312px] h-[50px] lg:w-[400px] lg:h-[60px] password bg-white text-light-grey flex justify-between px-5 py-[11px]"
            }
          >
            <div className="input flex flex-col items-start">
              <label
                htmlFor="password-input"
                className={
                  focusPass
                    ? "font-DM-Sans animate-fokus text-[10px] cursor-pointer"
                    : "font-DM-Sans animate-unfokus text-[24px] cursor-pointer w-5/6"
                }
                onClick={handleFocusPass}
              >
                Password
              </label>
              <input
                type="password"
                id="password-input"
                className={
                  focusPass
                    ? "text-light-grey animate-dissappear focus:outline-none bg-transparent w-full"
                    : "hidden"
                }
                onBlur={handleFocusPass}
              />
            </div>
            <img src={eye} alt="" className="w-8 cursor-pointer" />
          </div>
          <a href="#" className="font-DM-Sans text-xs self-end">
            Forgot password?
          </a>
          <Link to="/beranda">
            <button
              id="sign-in"
              className="font-DM-Sans text-base px-9 py-[10px] rounded-full bg-light-cyan w-fit mx-auto mb-[71px] lg:mb-0"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
