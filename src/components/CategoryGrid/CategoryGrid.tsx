import React, { useState, useEffect } from "react";
import "./CategoryGrid.css";

import GridFilterDropdown from "../GridFilterDropdown/GridFilterDropdown";
import LocationModal from "../LocationModal/LocationModal";

import { CountyObjectLoader } from "../../assets/CountyObjectLoader";
import { CountyObjectType } from "../../types/types";

const CategoryGrid = ({ category }: { category: string }) => {
  const [filterValues, setFilterValues] = useState<string[]>([]);
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

  let categoryArray = [];
  let countyList: string[] = [];

  for (const county in CountyObjectLoader) {
    for (let i = 0; i < CountyObjectLoader[county].length; i++) {
      if (CountyObjectLoader[county][i].tags.includes(category)) {
        categoryArray.push(CountyObjectLoader[county][i]);

        if (!countyList.includes(CountyObjectLoader[county][i].countyNameShort))
          countyList.push(CountyObjectLoader[county][i].countyNameShort);
      }
    }
  }

  useEffect(() => {
    setFilterValues(countyList);
  }, []);

  const handleModalClick = (countyObject: CountyObjectType) => {
    setCardClicked(!cardClicked);
    setModalObjectInfo(countyObject);
  };

  return (
    <div className="grid-wrapper">
      {cardClicked && (
        <LocationModal
          locationObject={modalObjectInfo}
          stateVal={cardClicked}
          setStateFN={setCardClicked}
        />
      )}
      <div className="grid-filter">
        <GridFilterDropdown
          filterValues={filterValues}
          setFilterValues={setFilterValues}
          countyList={countyList}
        />
      </div>
      <div className="grid-container">
        {categoryArray.map((object, index) => {
          return (
            <div
              className={
                filterValues.includes(object.countyNameShort)
                  ? "grid-card-container grid-visible"
                  : "grid-card-container grid-hidden"
              }
              key={index}
              onClick={() => handleModalClick(object)}
            >
              {/* <div className="grid-image-container"> */}
              <div className="grid-image-container">
                <img
                  className="grid-image"
                  src={object.image}
                  alt={`${object.name}`}
                />
              </div>
              <h1>{object.name}</h1>
              <p className="grid-image-county">
                {object.countyNameFull} County
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
