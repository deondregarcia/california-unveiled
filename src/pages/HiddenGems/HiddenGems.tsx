import React from "react";
import "./HiddenGems.css";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import CategoryHero from "../../components/CategoryHero/CategoryHero";

const HiddenGems = () => {
  return (
    <div>
      <CategoryHero category="hiddenGems" />
      <CategoryGrid category="hiddenGems" />
    </div>
  );
};

export default HiddenGems;
