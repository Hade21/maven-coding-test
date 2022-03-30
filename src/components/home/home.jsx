import React from "react";
import Navbar from "./navbar/navbar";
import FirstPage from "./newcomers-most-view/firstPage";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FirstPage />
    </div>
  );
};

export default Home;
