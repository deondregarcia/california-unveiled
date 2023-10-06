import React from "react";
import "./CategoryHero.css";

const CategoryHero = ({ category }: { category: string }) => {
  let title = "";
  let description = "";

  switch (category) {
    case "hiddenGems":
      title = "Hidden Gems";
      break;
    case "typicalTourist":
      title = "Typical Tourist";
      break;
  }

  switch (category) {
    case "hiddenGems":
      description = "Hidden Gems description lorem";
      break;
    case "typicalTourist":
      description = "Typical Tourist";
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
