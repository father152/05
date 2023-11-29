import React from "react";
import "./style_LeftSide.css"
// import Cross from '../Image/cross.png'
import Cross from '../Image/free-icon-font-search-3917754.svg'






export const LeftSide = () => {
  return (
    <div className="left_side">
    <div className="title">
      <a href=''><img src={Cross} alt="dfg"></img>Discovery</a>
      <a href=""><img src={Cross} alt="dfg"></img>History</a>
      <a href=""><img src={Cross} alt="dfg"></img>Science</a>
      <a href=""><img src={Cross} alt="dfg"></img>Discovery</a>
      <a href=""><img src={Cross} alt="dfg"></img>Discovery</a> 
      </div>
    </div>
  );
};

export default LeftSide;
