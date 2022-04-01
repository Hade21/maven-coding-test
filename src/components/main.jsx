import React, { useState, useEffect } from "react";
import Home from "./home/home";
import Login from "./login/login";
import Preview from "./preview-movie/preview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./home/menu/menu";

export default function Main() {
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
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login width={windowWidth} />} />
          <Route path="/beranda" element={<Home width={windowWidth} />} />
          <Route path="/preview" element={<Preview width={windowWidth} />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
