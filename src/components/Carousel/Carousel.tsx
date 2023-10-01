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
    <div className="carousel-wrapper">
      <div className="carousel-left-button" onClick={handleClickLeft}>
        <ArrowLeft />
      </div>
      <div className="carousel-right-button" onClick={handleClickRight}>
        <ArrowRight />
      </div>
      <div
        className="carousel-container"
        ref={carouselRef}
        style={{ transform: `translateX(${-160 * 2 * carouselIndex}px)` }}
      >
        {CountyObjectLoader[countyName].map((county) => {
          return (
            <div
              className="carousel-card"
              style={{ height: `${90 * 2}px`, width: `${160 * 2}px` }}
            >
              <img src={county.image} alt={`Location: ${county.name}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Carousel);
