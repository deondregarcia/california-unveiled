import React, { useContext } from "react";
import "./EllipsisDropdown.css";

import { CountyObjectType } from "../../types/types";
import ListContext from "../ListContext/ListContext";

const EllipsisDropdown = ({
  locationObject,
  setStateFN,
}: {
  locationObject: CountyObjectType;
  setStateFN: React.Dispatch<React.SetStateAction<[boolean, number | null]>>;
}) => {
  const { locationList, setLocationList } = useContext(ListContext);

  const handleAddClicked = () => {
    setLocationList((prev: any) => [...prev, locationObject]);
  };

  return (
    <div className="ellipsis-dropdown-container">
      {locationList.includes(locationObject) ? (
        <div className="ellipsis-already-added">
          <p>Added!</p>
        </div>
      ) : (
        <div onClick={handleAddClicked} className="ellipsis-add">
          <p>Add to my list?</p>
        </div>
      )}
    </div>
  );
};

export default EllipsisDropdown;
