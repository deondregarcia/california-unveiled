import React from "react";
import "./CategoryHero.css";

const CategoryHero = ({ category }: { category: string }) => {
  let title = "";
  let description = "";

  switch (category) {
    case "sightseeing":
      title = "Sightseeing";
      break;
    case "nature":
      title = "Nature";
      break;
    case "typicalTourist":
      title = "Typical Tourist";
      break;
    case "hiddenGems":
      title = "Hidden Gems";
      break;
  }

  switch (category) {
    case "sightseeing":
      description = "Sightseeing description lorem";
      break;
    case "nature":
      description = "Nature description lorem";
      break;
    case "typicalTourist":
      description = "Typical Tourist";
      break;
    case "hiddenGems":
      description = "Hidden Gems description lorem";
      break;
  }

  return (
    <div className="category-hero-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CategoryHero;
