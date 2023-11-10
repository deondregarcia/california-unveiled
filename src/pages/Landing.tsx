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
      <p>For those who want an adventure without the price tag</p>
      <div className="landing">
        <div className="county-overview-container">
          <p>
            People often dream about travelling abroad in search of novel
            adventures. SoCal Unveiled is a rebuttal to the notion that you can
            only find new experiences with expensive plane tickets. Here you'll
            find tons of new places to explore with only a few hours' drive
            investment.
          </p>
          <p>{countyNameArray[countyIndex]}</p>
          <div className="overview-images-container">
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
