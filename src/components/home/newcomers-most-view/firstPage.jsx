import React from "react";
import Mostviewed from "./mostviewed/mostviewed";
import Newcomers from "./newcomers/newcomers";

const FirstPage = (props) => {
  return (
    <div className="first-page md:flex relative top-[96px]">
      <Newcomers width={props.width} />
      <Mostviewed />
    </div>
  );
};

export default FirstPage;
