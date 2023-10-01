import React from "react";
import { ImageDir } from "../../assets/images/ImageDirectory";

import "./CountyOverview.css";

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

const CountyOverview = ({ hoverIndex }: { hoverIndex: string }) => {
  const countyIndex = Number(hoverIndex);

  return (
    <div className="county-overview-container">
      <h1>{countyNameArray[countyIndex]}</h1>
      <div className="overview-images-container">
        {ImageDir[countyStringIDArray[countyIndex]]?.map((image, index) => {
          return (
            <img
              className="overview-image"
              src={image}
              key={index}
              alt={`${countyNameArray[countyIndex]} County photo`}
            />
          );
        })}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        quaerat quam nesciunt a debitis harum ipsa sed? Adipisci soluta vel,
        accusantium, dolorem nesciunt qui nostrum, id officia laboriosam
        architecto similique.
      </p>
    </div>
  );
};

export default CountyOverview;
