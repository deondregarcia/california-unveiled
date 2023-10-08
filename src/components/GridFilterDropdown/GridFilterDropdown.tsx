import React, { MouseEventHandler, useState } from "react";
import "./GridFilterDropdown.css";

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
        ></div>
        <div className="filter-arrow"></div>
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
              return (
                <div
                  className="filter-dropdown-selector"
                  style={
                    filterValues.includes(county)
                      ? { backgroundColor: "gray" }
                      : { backgroundColor: "white" }
                  }
                  key={index}
                  onClick={() => handleFilterSelect(county)}
                >
                  <p>{county}</p>
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
