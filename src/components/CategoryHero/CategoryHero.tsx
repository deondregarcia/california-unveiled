import React from "react";
import "./CategoryHero.css";
import { ImageDir } from "../../assets/images/ImageDirectory";

const CategoryHero = ({ category }: { category: string }) => {
  let title = "";
  let description = "";
  // let imageURL = "";
  // let image = ImageDir.Kern[0];
  // let image = CILarge;

  switch (category) {
    case "sightseeing":
      title = "Sightseeing";
      description = "Sightseeing description lorem";
      break;
    case "nature":
      title = "Nature";
      description = "Nature description lorem";
      break;
    case "typicalTourist":
      title = "Typical Tourist";
      description = "Typical Tourist";
      break;
    case "hiddenGems":
      title = "Hidden Gems";
      description = "Hidden Gems description lorem";
      break;
  }

  return (
    <>
      <div
        className="category-hero-container"
        // style={{
        //   backgroundImage: `url(${image})`,
        // }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="category-hero-fade" />
    </>
  );
};

export default CategoryHero;
