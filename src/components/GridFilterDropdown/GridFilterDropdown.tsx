import React, { MouseEventHandler, useState } from "react";
import "./GridFilterDropdown.css";

import ArrowDown from "../../assets/svg/ArrowDown";

const GridFilterDropdown = ({
  filterValues,
  setFilterValues,
  countyList,
}: {
  filterValues: string[];
  setFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  countyList: string[];
}) => {
  const [filterActive, setFilterActive] = useState(false);

  const handleFilterSelect = (countyName: string) => {
    if (filterValues.includes(countyName)) {
      setFilterValues((prev) =>
        prev.filter((tempName) => tempName !== countyName)
      );
    } else {
      setFilterValues((prev) => [...prev, countyName]);
    }
  };

  const handleSelectNone = () => {
    setFilterValues([]);
  };

  const handleSelectAll = () => {
    setFilterValues(countyList);
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        <div
          className="filter-textbox"
          onClick={() => setFilterActive(!filterActive)}
        >
          <p>Filter by County</p>
        </div>
        <div
          className="filter-arrow-container"
          onClick={() => setFilterActive(!filterActive)}
        >
          <ArrowDown
            className={filterActive ? "filter-arrow-rotated" : "filter-arrow"}
            style={{ height: "1.2rem" }}
          />
        </div>
        <div
          className={
            filterActive
              ? "filter-dropdown-window"
              : "filter-dropdown-window window-inactive"
          }
        >
          <div
            className={
              filterActive
                ? "filter-dropdown dropdown-active"
                : "filter-dropdown dropdown-inactive"
            }
          >
            {countyList.map((county, index) => {
              let countyNameFull = "";
              switch (county) {
                case "Kern":
                  countyNameFull = "Kern";
                  break;
                case "SanLuis":
                  countyNameFull = "San Luis Obispo";
                  break;
                case "SanBar":
                  countyNameFull = "Santa Barbara";
                  break;
                case "Ven":
                  countyNameFull = "Ventura";
                  break;
                case "LosAng":
                  countyNameFull = "Los Angeles";
                  break;
                case "SanBern":
                  countyNameFull = "San Bernardino";
                  break;
                case "River":
                  countyNameFull = "Riverside";
                  break;
                case "Orange":
                  countyNameFull = "Orange";
                  break;
                case "Imperial":
                  countyNameFull = "Imperial";
                  break;
                case "SanDiego":
                  countyNameFull = "San Diego";
                  break;
              }

              return (
                <div
                  className="filter-dropdown-selector"
                  style={
                    filterValues.includes(county)
                      ? { backgroundColor: "#ADD8E6" }
                      : { backgroundColor: "white" }
                  }
                  key={index}
                  onClick={() => handleFilterSelect(county)}
                >
                  <p>{countyNameFull}</p>
                </div>
              );
            })}
            <div className="filter-total-select-wrapper">
              <div
                onClick={handleSelectNone}
                className="filter-total-select-none"
              >
                <p>None</p>
              </div>
              <div
                onClick={handleSelectAll}
                className="filter-total-select-all"
              >
                <p>All</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridFilterDropdown;
