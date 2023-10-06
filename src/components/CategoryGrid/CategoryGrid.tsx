import React from "react";
import "./CategoryGrid.css";

import { CountyObjectLoader } from "../../assets/CountyObjectLoader";

const CategoryGrid = ({ category }: { category: string }) => {
  return (
    <div className="grid-wrapper">
      <div className="grid-container">
        {CountyObjectLoader["LosAng"].map((object, index) => {
          return (
            <div className="grid-card-container" key={index}>
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
