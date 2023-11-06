import React, { useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import ListContext from "../ListContext/ListContext";
import "./LocationModal.css";

import ExitIcon from "../../assets/svg/ExitIcon";

import { CountyObjectType } from "../../types/types";

// to be used with createPortal in below component
const LocationModalComponent = ({
  locationObject,
  stateVal,
  setStateFN,
}: {
  locationObject: CountyObjectType;
  stateVal: boolean;
  setStateFN: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { locationList, setLocationList } = useContext(ListContext);

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setStateFN(false);
    }
  };

  const handleModalAddToList = (object: CountyObjectType) => {
    setLocationList((prev: CountyObjectType[]) => {
      return [...prev, object];
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <h1 className="modal-title">{locationObject.name}</h1>
        <img
          src={locationObject.image}
          alt={`${locationObject.countyNameFull} County`}
          className="modal-image"
        />
        <h1 className="modal-county">{locationObject.countyNameFull} County</h1>
        <div className="modal-description-wrapper">
          <h1>Description</h1>
          <p className="modal-description">{locationObject.description}</p>
        </div>

        {/* below is either "add to list" or "added" button */}
        {locationList.includes(locationObject) ? (
          <div className="modal-add-to-list">
            <h3>Added to List!</h3>
          </div>
        ) : (
          <div
            className="modal-add-to-list"
            onClick={() => handleModalAddToList(locationObject)}
          >
            <h3>Add to My List?</h3>
          </div>
        )}

        <ExitIcon
          className="modal-exit-icon"
          onClick={() => setStateFN(!stateVal)}
        />
      </div>
    </div>
  );
};

// actual exported component
const LocationModal = ({
  locationObject,
  stateVal,
  setStateFN,
}: {
  locationObject: CountyObjectType;
  stateVal: boolean;
  setStateFN: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {createPortal(
        <LocationModalComponent
          locationObject={locationObject}
          stateVal={stateVal}
          setStateFN={setStateFN}
        />,
        document.getElementById("modal") as Element
      )}
    </>
  );
};

export default LocationModal;
