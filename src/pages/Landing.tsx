import React, { useState, useEffect } from "react";
import SoCalCountiesSVG from "../assets/svg/SoCalCountiesSVG";
import CountyOverview from "../components/CountyOverview/CountyOverview";
import Carousel from "../components/Carousel/Carousel";
import "./Landing.css";

const Landing = () => {
  // each of 10 counties will correspond to 0-9, while 10 means none are hovered
  const [hoverIndex, setHoverIndex] = useState("10");

  const [indexCounter, setIndexCounter] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIndexCounter((prevState) => (prevState + 1) % 30);
    }, 2000);

    return () => clearTimeout(timer);
  }, [indexCounter]);

  return (
    <div className="landing-container">
      <h1>SoCal Unveiled</h1>
      <div className="landing">
        <div className="map-container">
          <SoCalCountiesSVG
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
            indexCounter={indexCounter}
          />
        </div>
        <CountyOverview hoverIndex={hoverIndex} />
      </div>
      <Carousel countyName="LosAng" />
    </div>
  );
};

export default Landing;
