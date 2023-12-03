import React, { memo, useState, useContext, useEffect, useRef } from "react";
import "./Carousel.css";

import { CountyObjectLoader } from "../../assets/CountyObjectLoader";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import LocationModal from "../LocationModal/LocationModal";

import { CountyObjectType } from "../../types/types";
import Ellipsis from "../../assets/svg/Ellipsis";
import EllipsisDropdown from "../EllipsisDropdown/EllipsisDropdown";

import ListContext from "../ListContext/ListContext";

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
  const [startingX, setStartingX] = useState(0);

  // ref of carousel-container div, to grab length later (used for the mobile section only)
  const carouselContainerRef = useRef<HTMLDivElement>(null);

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

  // state for ellipsis dropdown
  const [ellClicked, setEllClicked] = useState<[boolean, number | null]>([
    false,
    null,
  ]);

  // state for "add all" button
  const [addAllClicked, setAddAllClicked] = useState(false);

  const {
    locationList,
    setLocationList,
    countyFullAddList,
    setCountyFullAddList,
  } = useContext(ListContext);

  const slideAmount = CountyObjectLoader[countyName].length;
  // const visibleCardLength = 4; // max num of cards in one row, minus one.
  // const cardHeight = 160;
  // const cardWidth = window.innerWidth * 0.165;
  const cardMargin = window.innerWidth * 0.01; // margin between cards
  const carouselMargin = window.innerWidth * 0.0625; // margin on left of entire carousel

  let visibleCardLength: number;
  let cardHeight: number;
  let cardWidth: number;
  // let cardMargin: number;
  // let carouselMargin: number;

  if (window.innerWidth < 1000) {
    visibleCardLength = 1;
    cardHeight = 100;
    cardWidth = window.innerWidth * 0.4125;
  } else {
    visibleCardLength = 4;
    cardHeight = 160;
    cardWidth = window.innerWidth * 0.165;
  }

  // fn to move carousel right
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

  // fn to move carousel left
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

  // fn to record initial x position for mobile drag
  const handleDragStart = (e: any) => {
    setStartingX(e.touches[0].clientX);
  };

  // fn for mobile devices to drag
  const handleDrag = (e: any) => {
    setCarouselTranslation((prev) => {
      let [idx, oldTranslation] = prev;

      let deltaTranslation = e.touches[0].clientX - startingX;

      // prevent from being dragged past left end of carousel
      if (oldTranslation + deltaTranslation > 0) {
        return [idx, 0];
      }

      // prevent from being dragged past right end of carousel
      if (carouselContainerRef.current?.offsetWidth) {
        if (
          oldTranslation + deltaTranslation <
          -1 *
            (carouselContainerRef.current?.offsetWidth -
              window.innerWidth +
              2 * carouselMargin)
        ) {
          return [
            idx,
            -1 *
              (carouselContainerRef.current?.offsetWidth -
                window.innerWidth +
                2 * carouselMargin),
          ];
        }
      }

      // console.log(carouselContainerRef.current?.offsetWidth);

      return [idx, oldTranslation + deltaTranslation];
    });
    setStartingX(e.touches[0].clientX);
  };

  const handleModalClick = (countyObject: CountyObjectType) => {
    setCardClicked(!cardClicked);
    setModalObjectInfo(countyObject);
  };

  const handleEllClicked = (idx: number) => {
    setEllClicked((prev) => {
      let [bool, currIndex] = prev;

      if (idx === currIndex) {
        return [!bool, currIndex];
      } else {
        return [!bool, idx];
      }
    });
  };

  // for adding all county locations to My List
  const handleAddAll = () => {
    setAddAllClicked(false);

    let tempArray: CountyObjectType[] = [];
    CountyObjectLoader[countyName].forEach((location, index) => {
      if (!locationList.includes(location)) tempArray.push(location);
    });

    setLocationList((prev: CountyObjectType[]) => [...prev, ...tempArray]);
    setCountyFullAddList((prev: string[]) => [...prev, countyNameFull]);
  };

  // the following has two divs, one for mobile devices and one for regular desktop
  // mobile devices implement a touch and drag mechanism while desktop has arrow buttons to move the carousel, but are mostly the same
  return (
    <>
      {window.innerWidth > 1000 ? (
        // regular desktop div (look for comment above return)
        <div className="carousel-outer-wrapper">
          {cardClicked && (
            <LocationModal
              locationObject={modalObjectInfo}
              stateVal={cardClicked}
              setStateFN={setCardClicked}
            />
          )}
          {/* outer wrapper for white space around carousel */}
          <div className="carousel-header">
            <h1>{countyNameFull} County</h1>
            {countyFullAddList.includes(countyNameFull) ? (
              <p className="carousel-addall-added">All locations added!</p>
            ) : (
              <div
                className="carousel-addall-container"
                onClick={() => setAddAllClicked(!addAllClicked)}
              >
                <p>Add all to My List</p>
                <ArrowRight className="carousel-addall-arrow" />
                <div
                  className={
                    addAllClicked
                      ? "carousel-addall-confirm"
                      : "carousel-addall-confirm-inactive"
                  }
                >
                  <p>Are you sure?</p>
                  {addAllClicked && (
                    <>
                      <div
                        onClick={handleAddAll}
                        className="carousel-addall-confirm-yes"
                      >
                        <p>Yes</p>
                      </div>
                      <div
                        onClick={() => setAddAllClicked(false)}
                        className="carousel-addall-confirm-no"
                      >
                        <p>No</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
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
                      style={
                        index < slideAmount - 1
                          ? {
                              height: `${cardHeight}px`,
                              width: `${cardWidth}px`,
                              marginRight: `${cardMargin}px`,
                            }
                          : {
                              height: `${cardHeight}px`,
                              width: `${cardWidth}px`,
                            }
                      }
                    >
                      <Ellipsis
                        onClick={() => handleEllClicked(index)}
                        className="carousel-card-ellipsis"
                      />
                      {ellClicked[0] === true && ellClicked[1] === index && (
                        <EllipsisDropdown
                          locationObject={county}
                          setStateFN={setEllClicked}
                        />
                      )}
                      <img
                        onClick={() => handleModalClick(county)}
                        src={county.image}
                        alt={`Location: ${county.name}`}
                      />
                    </div>
                    <p
                      style={
                        index < slideAmount - 1
                          ? {
                              marginRight: `${cardMargin}px`,
                            }
                          : { marginRight: `0px` }
                      }
                    >
                      {county.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // mobile specific div (look for comment above return)
        <div className="carousel-outer-wrapper">
          {cardClicked && (
            <LocationModal
              locationObject={modalObjectInfo}
              stateVal={cardClicked}
              setStateFN={setCardClicked}
            />
          )}
          {/* outer wrapper for white space around carousel */}
          <div className="carousel-header">
            <h1>{countyNameFull} County</h1>
            {countyFullAddList.includes(countyNameFull) ? (
              <p className="carousel-addall-added">All locations added!</p>
            ) : (
              <div
                className="carousel-addall-container"
                onClick={() => setAddAllClicked(!addAllClicked)}
              >
                <p>Add all to My List</p>
                <ArrowRight className="carousel-addall-arrow" />
                <div
                  className={
                    addAllClicked
                      ? "carousel-addall-confirm"
                      : "carousel-addall-confirm-inactive"
                  }
                >
                  <p>Are you sure?</p>
                  {addAllClicked && (
                    <>
                      <div
                        onClick={handleAddAll}
                        className="carousel-addall-confirm-yes"
                      >
                        <p>Yes</p>
                      </div>
                      <div
                        onClick={() => setAddAllClicked(false)}
                        className="carousel-addall-confirm-no"
                      >
                        <p>No</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="carousel-wrapper">
            <div
              className="carousel-container"
              onTouchStart={handleDragStart}
              onTouchMove={handleDrag}
              ref={carouselContainerRef}
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
                      style={
                        index < slideAmount - 1
                          ? {
                              height: `${cardHeight}px`,
                              width: `${cardWidth}px`,
                              marginRight: `${cardMargin}px`,
                            }
                          : {
                              height: `${cardHeight}px`,
                              width: `${cardWidth}px`,
                            }
                      }
                    >
                      <Ellipsis
                        onClick={() => handleEllClicked(index)}
                        className="carousel-card-ellipsis"
                      />
                      {ellClicked[0] === true && ellClicked[1] === index && (
                        <EllipsisDropdown
                          locationObject={county}
                          setStateFN={setEllClicked}
                        />
                      )}
                      <img
                        onClick={() => handleModalClick(county)}
                        src={county.image}
                        alt={`Location: ${county.name}`}
                      />
                    </div>
                    <p
                      style={
                        index < slideAmount - 1
                          ? {
                              marginRight: `${cardMargin}px`,
                            }
                          : { marginRight: `0px` }
                      }
                    >
                      {county.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Carousel);
