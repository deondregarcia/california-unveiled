import React from "react";
import "./Sightseeing.css";

import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import CategoryHero from "../../components/CategoryHero/CategoryHero";

const Sightseeing = () => {
  return (
    <div>
      <CategoryHero category="sightseeing" />
      <CategoryGrid category="sightseeing" />
    </div>
  );
};

export default Sightseeing;
