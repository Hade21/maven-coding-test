import React, { useState, useEffect } from "react";
import LogoDesktop from "../../assets/Group 77.svg";
import LogoMobile from "../../assets/Group 77 mobile.svg";
import eye from "../../assets/ic_eye_disable.svg";

const Login = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return (
    <div className="login bg-mobile-login lg:bg-desktop-login w-screen h-screen bg-black text-white flex flex-col lg:flex-row lg:justify-center items-center gap-32 lg:gap-72 overflow-auto">
      <div className="left">
        <img
          src={windowWidth > 375 ? LogoDesktop : LogoMobile}
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
          <div className="w-[312px] h-[50px] lg:w-[400px] lg:h-[60px] email bg-white text-light-grey flex flex-col items-start px-5 py-[11px]">
            <label
              htmlFor="email-input"
              className="font-DM-Sans text-[10px] cursor-pointer"
            >
              Username/Email
            </label>
            <input
              type="email"
              id="email-input"
              className="text-light-grey focus:outline-none"
            />
          </div>
          <div className="w-[312px] h-[50px] lg:w-[400px] lg:h-[60px] password bg-white text-light-grey flex justify-between px-5 py-[11px]">
            <div className="input flex flex-col items-start">
              <label
                htmlFor="password-input"
                className="font-DM-Sans text-[10px] cursor-pointer"
              >
                Password
              </label>
              <input
                type="password"
                id="password-input"
                className="text-light-grey focus:outline-none"
              />
            </div>
            <img src={eye} alt="" className="" />
          </div>
          <a href="#" className="font-DM-Sans text-xs self-end">
            Forgot password?
          </a>
          <button
            id="sign-in"
            className="font-DM-Sans text-base px-9 py-[10px] rounded-full bg-light-cyan w-fit mx-auto mb-[71px] lg:mb-0"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
