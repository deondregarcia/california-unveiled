import React, { useContext, useState } from "react";
import "./MyList.css";
import ListContext from "../../components/ListContext/ListContext";
import { CountyObjectType } from "../../types/types";
import TrashIcon from "../../assets/svg/TrashIcon";

const MyListItem = ({
  location,
  index,
}: {
  location: CountyObjectType;
  index: number;
}) => {
  const [deleteActive, setDeleteActive] = useState(false);

  return (
    <li key={index}>
      <div
        className={
          deleteActive
            ? "trash-icon-wrapper delete-active"
            : "trash-icon-wrapper"
        }
      >
        <TrashIcon className="trash-icon" />
      </div>
      <div className="mylist-left">
        <img src={location.image} alt={`${location.name}`} />
        <h1>{location.countyNameFull} County</h1>
      </div>
      <div className="mylist-right">
        <h1>{location.name}</h1>
        <p>{location.description}</p>
      </div>
    </li>
  );
};

const MyList = () => {
  const { locationList, setLocationList } = useContext(ListContext);

  return (
    <div className="mylist-container">
      <ul>
        {/* if locationList is empty */}
        {locationList.length === 0 && (
          <li>
            <h1>List Empty</h1>
          </li>
        )}

        {/* if locationList has items */}
        {locationList.map((locationObject: CountyObjectType, index: number) => {
          return <MyListItem location={locationObject} index={index} />;
        })}
      </ul>
    </div>
  );
};

export default MyList;
