import React from "react";
import "./LeftSide";
import LeftSide from "./LeftSide";
import CentralSide from './CentralSide';
import RightSide from "./RightSide";
import "./style_content.css";




export const Content = () => {
  return (
    <div className="content">
      <LeftSide />
      <CentralSide />
      <RightSide />
    </div>
  );
};

export default Content;
