import React, { useState, useEffect } from "react";
import Home from "./home/home";
import Login from "./login/login";

export default function Main() {
  return (
    <div className="main">
      {/* <Login /> */}
      <Home />
    </div>
  );
}
