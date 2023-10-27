import React, { memo, useState, useContext } from "react";
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

  const { locationList, setLocationList } = useContext(ListContext);

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
      <div className="carousel-header">
        <h1>{countyNameFull} County</h1>
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
                      : { height: `${cardHeight}px`, width: `${cardWidth}px` }
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
  );
};

export default memo(Carousel);
