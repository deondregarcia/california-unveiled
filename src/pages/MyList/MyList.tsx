import React, { useContext, useState } from "react";
import "./MyList.css";
import ListContext from "../../components/ListContext/ListContext";
import { CountyObjectType } from "../../types/types";
import TrashIcon from "../../assets/svg/TrashIcon";

const MyList = () => {
  const { locationList, setLocationList } = useContext(ListContext);

  const handleRemoveListItem = (locationName: string) => {
    setLocationList((prev: CountyObjectType[]) => {
      let newArray: CountyObjectType[] = [];
      prev.forEach((object: CountyObjectType) => {
        if (object.name !== locationName) newArray.push(object);
      });
      return newArray;
    });
  };

  return (
    <div className="mylist-wrapper">
      <div className="mylist-header">
        <h1> My List </h1>
      </div>

      {locationList.length > 0 ? (
        <div className="mylist-container">
          {locationList?.map((location: CountyObjectType, index: number) => {
            return (
              <div className="mylist-item-container">
                <TrashIcon
                  onClick={() => handleRemoveListItem(location.name)}
                  className="mylist-trash-icon"
                />
                <div className="mylist-item-image-container">
                  <img className="mylist-image" src={location.image} />
                  <div className="mylist-item-text-header">
                    <h1>{location.name}</h1>
                    <h3>{location.countyNameFull} County</h3>
                  </div>
                </div>
                <div className="mylist-item-desc">
                  <h3>Description</h3>
                  <p>{location.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mylist-empty">
          <h1>Your list is empty - add some new locations!</h1>
        </div>
      )}
    </div>
  );
};

export default MyList;
