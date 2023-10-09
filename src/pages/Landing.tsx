import React, { useState, useEffect } from "react";
import SoCalCountiesSVG from "../assets/svg/SoCalCountiesSVG";
import Carousel from "../components/Carousel/Carousel";
import { ImageDir } from "../assets/images/ImageDirectory";
import "./Landing.css";

const countyNameArray = [
  "Kern",
  "San Luis Obispo",
  "Santa Barbara",
  "Ventura",
  "Los Angeles",
  "San Bernardino",
  "Riverside",
  "Orange",
  "Imperial",
  "San Diego",
  "Tap on a county",
];

const countyStringIDArray = [
  "Kern",
  "SanLuis",
  "SanBar",
  "Ven",
  "LosAng",
  "SanBern",
  "River",
  "Orange",
  "Imperial",
  "SanDiego",
  "Tap on a county",
];

const Landing = () => {
  // each of 10 counties will correspond to 0-9, while 10 means none are hovered
  const [hoverIndex, setHoverIndex] = useState("10");

  const [indexCounter, setIndexCounter] = useState(0);

  const countyIndex = Number(hoverIndex);

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
        <div className="county-overview-container">
          <h1>{countyNameArray[countyIndex]}</h1>
          <div className="overview-images-container">
            {ImageDir[countyStringIDArray[countyIndex]]?.map((image, index) => {
              return (
                <img
                  className="overview-image"
                  src={image}
                  key={index}
                  alt={`${countyNameArray[countyIndex]} County`}
                />
              );
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quaerat quam nesciunt a debitis harum ipsa sed? Adipisci soluta vel,
            accusantium, dolorem nesciunt qui nostrum, id officia laboriosam
            architecto similique.
          </p>
        </div>
        <div className="map-container">
          <SoCalCountiesSVG
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
            indexCounter={indexCounter}
          />
        </div>
      </div>
      <Carousel countyName="LosAng" />
      <Carousel countyName="SanDiego" />
      <Carousel countyName="Orange" />
      <Carousel countyName="SanBern" />
      <Carousel countyName="Kern" />
      <Carousel countyName="SanLuis" />
      <Carousel countyName="Ven" />
      <Carousel countyName="River" />
      <Carousel countyName="Imperial" />
      <Carousel countyName="SanBar" />
    </div>
  );
};

export default Landing;
