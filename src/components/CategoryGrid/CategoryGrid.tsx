import React, { useState, useEffect } from "react";
import "./CategoryGrid.css";

import GridFilterDropdown from "../GridFilterDropdown/GridFilterDropdown";

import { CountyObjectLoader } from "../../assets/CountyObjectLoader";

const CategoryGrid = ({ category }: { category: string }) => {
  const [filterValues, setFilterValues] = useState<string[]>([]);

  let categoryArray = [];
  let countyList: string[] = [];

  for (const county in CountyObjectLoader) {
    for (let i = 0; i < CountyObjectLoader[county].length; i++) {
      if (CountyObjectLoader[county][i].tags.includes(category))
        categoryArray.push(CountyObjectLoader[county][i]);
      if (!countyList.includes(CountyObjectLoader[county][i].countyNameShort))
        countyList.push(CountyObjectLoader[county][i].countyNameShort);
    }
  }

  useEffect(() => {
    setFilterValues(countyList);
  }, []);

  return (
    <div className="grid-wrapper">
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
              <p>{object.countyIndex}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
