import React, { memo, useState, useEffect, useRef } from "react";
import "./Carousel.css";

import { CountyObjectLoader } from "../../assets/CountyObjectLoader";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";

const Carousel = ({ countyName }: { countyName: string }) => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slideLength = CountyObjectLoader[countyName].length;
  const visibleCardLength = 3; // max num of cards in one row, minus one. Revise later to programmatically grab number
  const cardWidth = window.innerWidth * 0.2;

  let countyNameFull = "";
  switch (countyName) {
    case "Kern":
      countyNameFull = "Kern";
      break;
    case "SanLuis":
      countyNameFull = "San Luis Obispo";
      break;
    case "SanBar":
      countyNameFull = "Santa Barbara";
      break;
    case "Ven":
      countyNameFull = "Ventura";
      break;
    case "LosAng":
      countyNameFull = "Los Angeles";
      break;
    case "SanBern":
      countyNameFull = "San Bernardino";
      break;
    case "River":
      countyNameFull = "Riverside";
      break;
    case "Orange":
      countyNameFull = "Orange";
      break;
    case "Imperial":
      countyNameFull = "Imperial";
      break;
    case "SanDiego":
      countyNameFull = "San Diego";
      break;
  }

  const handleClickRight = (): void => {
    setCarouselIndex((prev) => {
      console.log(prev);
      if (prev < slideLength - 1 - visibleCardLength) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const handleClickLeft = () => {
    setCarouselIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  console.log(window.innerWidth);

  useEffect(() => {
    console.log(
      `carousel ref width: ${
        carouselRef.current?.getBoundingClientRect().width
      }`
    );
  }, []);

  return (
    <div className="carousel-outer-wrapper">
      {/* outer wrapper for white space around carousel */}
      <h1 className="carousel-header">{countyNameFull} County</h1>
      <div className="carousel-wrapper">
        <div
          className={
            carouselIndex === 0
              ? "carousel-left-button button-hidden"
              : "carousel-left-button button-visible"
          }
          onClick={handleClickLeft}
        >
          <ArrowLeft className="carousel-button-arrow" />
        </div>
        <div
          className={
            carouselIndex >= slideLength - 1 - visibleCardLength
              ? "carousel-right-button button-hidden"
              : "carousel-right-button button-visible"
          }
          onClick={handleClickRight}
        >
          <ArrowRight className="carousel-button-arrow" />
        </div>
        <div
          className="carousel-container"
          ref={carouselRef}
          style={{
            transform: `translateX(${
              -cardWidth * carouselIndex - 15 * carouselIndex
            }px)`,
            marginLeft: `${window.innerWidth * 0.045}px`,
          }}
        >
          {CountyObjectLoader[countyName].map((county) => {
            return (
              <div className="carousel-card-wrapper">
                <div
                  className="carousel-card"
                  style={{ height: `${180}px`, width: `${cardWidth}px` }}
                >
                  <img src={county.image} alt={`Location: ${county.name}`} />
                </div>
                <p>{county.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Carousel);
