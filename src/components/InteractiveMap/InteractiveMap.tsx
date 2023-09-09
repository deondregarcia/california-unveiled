import React from "react";
import SoCalCountiesSVG from "../../assets/svg/SoCalCountiesSVG";
import "./InteractiveMap.css";

const InteractiveMap = () => {
  return (
    <div className="interactive-map">
      <SoCalCountiesSVG className="counties-svg" />
    </div>
  );
};

export default InteractiveMap;
