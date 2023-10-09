import React from "react";
import "./TypicalTourist.css";

import CategoryHero from "../../components/CategoryHero/CategoryHero";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";

const TypicalTourist = () => {
  return (
    <div>
      <CategoryHero category="typicalTourist" />
      <CategoryGrid category="typicalTourist" />
    </div>
  );
};

export default TypicalTourist;
