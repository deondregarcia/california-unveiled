import React from "react";
import "./Nature.css";

import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import CategoryHero from "../../components/CategoryHero/CategoryHero";

const Nature = () => {
  return (
    <div>
      <CategoryHero category="nature" />
      <CategoryGrid category="nature" />
    </div>
  );
};

export default Nature;
