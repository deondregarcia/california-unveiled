import { ImageDir } from "./images/ImageDirectory";
import { CountyObjectLoaderType, CountyObjectType } from "../types/types";
import { CountyDescriptions } from "./CountyDescriptions";
import { LocationNames } from "./LocationNames";
import { CountyTags } from "./CountyTags";

const buildCountyObjectArray = (
  countyName: string,
  countyIdx: number
): CountyObjectType[] => {
  const countyArray = [];

  // use the county names to loop through the image, description, etc. objects
  for (let i = 0; i < ImageDir[countyName].length; i++) {
    let countyNameFull = "";
    switch (countyName) {
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

    let tempObject: CountyObjectType = {
      name: "",
      countyIndex: countyIdx,
      countyNameShort: countyName,
      countyNameFull: countyNameFull,
      image: null,
      description: "",
      tags: [],
    };

    tempObject.name = LocationNames[countyName][i];
    tempObject.image = ImageDir[countyName][i];
    tempObject.description = CountyDescriptions[countyName][i];

    if (typeof CountyTags[countyName][i] === "string") {
      tempObject.tags.push(CountyTags[countyName][i]);
    } else {
      for (let j = 0; j < CountyTags[countyName][i]?.length; j++) {
        tempObject.tags.push(CountyTags[countyName][i][j]);
      }
    }

    countyArray.push(tempObject);
  }

  return countyArray;
};

export const CountyObjectLoader: CountyObjectLoaderType = {
  Kern: buildCountyObjectArray("Kern", 0),
  SanLuis: buildCountyObjectArray("SanLuis", 1),
  SanBar: buildCountyObjectArray("SanBar", 2),
  Ven: buildCountyObjectArray("Ven", 3),
  LosAng: buildCountyObjectArray("LosAng", 4),
  SanBern: buildCountyObjectArray("SanBern", 5),
  River: buildCountyObjectArray("River", 6),
  Orange: buildCountyObjectArray("Orange", 7),
  Imperial: buildCountyObjectArray("Imperial", 8),
  SanDiego: buildCountyObjectArray("SanDiego", 9),
};
