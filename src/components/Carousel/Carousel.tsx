import React, { memo, useState, useEffect, useRef } from "react";
import "./Carousel.css";

import { CountyObjectLoader } from "../../assets/CountyObjectLoader";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import LocationModal from "../LocationModal/LocationModal";

import { CountyObjectType } from "../../types/types";

const Carousel = ({
  countyName,
  countyNameFull,
}: {
  countyName: string;
  countyNameFull: string;
}) => {
  const [carouselTranslation, setCarouselTranslation] = useState<
    [number, number]
  >([0, 0]); // [carousel index, carousel translation]
  const [cardClicked, setCardClicked] = useState(false);
  const [modalObjectInfo, setModalObjectInfo] = useState<CountyObjectType>({
    name: "",
    countyIndex: null,
    countyNameShort: "",
    countyNameFull: "",
    image: null,
    description: "",
    tags: [],
  });

  const slideAmount = CountyObjectLoader[countyName].length;
  const visibleCardLength = 4; // max num of cards in one row, minus one. Revise later to programmatically grab number
  const cardHeight = 160;
  const cardWidth = window.innerWidth * 0.165;
  const cardMargin = window.innerWidth * 0.01; // margin between cards
  const carouselMargin = window.innerWidth * 0.0625; // margin on left of entire carousel

  const handleClickRight = (): void => {
    setCarouselTranslation((prev) => {
      let [idx, translation] = prev;
      if (idx === 0) {
        translation = carouselMargin + cardWidth - window.innerWidth * 0.055;
        return [idx + 1, -translation];
      } else if (idx < slideAmount - 1 - visibleCardLength) {
        translation = translation - cardWidth - cardMargin;
        return [idx + 1, translation];
      } else if (idx < slideAmount - 2 - visibleCardLength) {
        // moving onto last slide will have diff translation amount
        translation =
          translation - cardWidth - cardMargin + window.innerWidth * 0.055;
        return [idx + 1, translation];
      } else {
        return prev;
      }
    });
  };

  const handleClickLeft = () => {
    setCarouselTranslation((prev) => {
      let [idx, translation] = prev;
      if (idx === slideAmount - 1 - visibleCardLength) {
        translation =
          translation + carouselMargin + cardWidth - window.innerWidth * 0.055;
        return [idx - 1, translation];
      } else if (idx < slideAmount - 1 - visibleCardLength) {
        translation = translation + cardWidth + cardMargin;
        return [idx - 1, translation];
      } else if (idx === 1) {
        // moving onto last slide will have diff translation amount
        translation = carouselMargin + cardWidth + window.innerWidth * 0.055;
        return [idx - 1, translation];
      } else {
        return prev;
      }
    });
  };

  const handleModalClick = (countyObject: CountyObjectType) => {
    setCardClicked(!cardClicked);
    setModalObjectInfo(countyObject);
  };

  return (
    <div className="carousel-outer-wrapper">
      {cardClicked && (
        <LocationModal
          locationObject={modalObjectInfo}
          stateVal={cardClicked}
          setStateFN={setCardClicked}
        />
      )}
      {/* outer wrapper for white space around carousel */}
      <h1 className="carousel-header">{countyNameFull} County</h1>
      <div className="carousel-wrapper">
        <div
          className={
            carouselTranslation[0] === 0
              ? "carousel-left-button button-hidden"
              : "carousel-left-button button-visible"
          }
          style={{ height: `${cardHeight}px` }}
          onClick={handleClickLeft}
        >
          <ArrowLeft className="carousel-button-arrow" />
        </div>
        <div
          className={
            carouselTranslation[0] >= slideAmount - 1 - visibleCardLength
              ? "carousel-right-button button-hidden"
              : "carousel-right-button button-visible"
          }
          style={{ height: `${cardHeight}px` }}
          onClick={handleClickRight}
        >
          <ArrowRight className="carousel-button-arrow" />
        </div>
        <div
          className="carousel-container"
          style={{
            transform: `translateX(${carouselTranslation[1]}px)`,
            marginLeft: `${carouselMargin}px`,
          }}
        >
          {CountyObjectLoader[countyName].map((county, index) => {
            return (
              <div className="carousel-card-wrapper" key={index}>
                <div
                  className="carousel-card"
                  onClick={() => handleModalClick(county)}
                  style={
                    index < slideAmount - 1
                      ? {
                          height: `${cardHeight}px`,
                          width: `${cardWidth}px`,
                          marginRight: `${cardMargin}px`,
                        }
                      : { height: `${cardHeight}px`, width: `${cardWidth}px` }
                  }
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
