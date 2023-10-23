import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./LocationModal.css";

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
  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setStateFN(false);
    }
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
        <div className="modal-exit" onClick={() => setStateFN(!stateVal)}>
          <h1>X</h1>
        </div>
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
