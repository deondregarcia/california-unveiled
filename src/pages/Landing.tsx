import React, { useState, useEffect } from "react";
import SoCalCountiesSVG from "../assets/svg/SoCalCountiesSVG";
import Carousel from "../components/Carousel/Carousel";
import { ImageDir } from "../assets/images/ImageDirectory";
import "./Landing.css";

const countyNameArray = [
  "Kern County",
  "San Luis Obispo County",
  "Santa Barbara County",
  "Ventura County",
  "Los Angeles County",
  "San Bernardino County",
  "Riverside County",
  "Orange County",
  "Imperial County",
  "San Diego County",
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
      <p>For a new adventure, without the price tag</p>
      <div className="landing">
        <div className="county-overview-container">
          <h3>What is it ?</h3>
          <p>
            People often dream about travelling abroad in search of new
            adventures, but what about right here at home?{" "}
            <b className="text-highlight">SoCal Unveiled</b> provides you with
            tons of <b className="text-highlight">new places to explore</b> -
            all without the price tag of a plane ticket.
          </p>
          <p className="hover-insight">(Hover over a county to see images)</p>
        </div>
        <div className="overview-images-container">
          <h3>{countyNameArray[countyIndex]}</h3>
          {ImageDir[countyStringIDArray[countyIndex]]
            ?.slice(0, 3)
            .map((image, index) => {
              return (
                <img
                  className={
                    index === 1
                      ? "overview-image second-image"
                      : "overview-image"
                  }
                  style={{
                    animation: `fade-in ${
                      800 + 250 * index
                    }ms ease-in-out, bounce 3000ms ${
                      1000 + 300 * index
                    }ms ease-in-out infinite`,
                  }}
                  src={image}
                  key={index}
                  alt={`${countyNameArray[countyIndex]} County`}
                />
              );
            })}
        </div>
        <div className="map-container">
          <SoCalCountiesSVG
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
            indexCounter={indexCounter}
          />
        </div>
      </div>
      <Carousel countyName="SanDiego" countyNameFull="San Diego" />
      <Carousel countyName="LosAng" countyNameFull="Los Angeles" />
      <Carousel countyName="Orange" countyNameFull="Orange" />
      <Carousel countyName="SanBern" countyNameFull="San Bernardino" />
      <Carousel countyName="SanBar" countyNameFull="Santa Barbara" />
      <Carousel countyName="SanLuis" countyNameFull="San Luis Obispo" />
      <Carousel countyName="River" countyNameFull="Riverside" />
      <Carousel countyName="Kern" countyNameFull="Kern" />
      <Carousel countyName="Ven" countyNameFull="Ventura" />
      <Carousel countyName="Imperial" countyNameFull="Imperial" />
    </div>
  );
};

export default Landing;
