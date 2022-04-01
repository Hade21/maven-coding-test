import React from "react";
import Categories from "./categories/categories";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import FirstPage from "./newcomers-most-view/firstPage";

const Home = (props) => {
  return (
    <div className="home w-full">
      <Navbar width={props.width} />
      <FirstPage width={props.width} />
      <Categories width={props.width} />
      <Footer />
    </div>
  );
};

export default Home;
