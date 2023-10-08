import { ImageDir } from "./images/ImageDirectory";
import { CountyObjectLoaderType, CountyObjectType } from "../types/types";
import { CountyDescriptions } from "./CountyDescriptions";
import { CountyTags } from "./CountyTags";

const buildCountyObjectArray = (
  countyName: string,
  countyIdx: number
): CountyObjectType[] => {
  const countyArray = [];

  // use the county names to loop through the image, description, etc. objects
  for (let i = 0; i < ImageDir[countyName].length; i++) {
    let tempObject: CountyObjectType = {
      name: "",
      countyIndex: countyIdx,
      countyNameShort: countyName,
      image: null,
      description: "",
      tags: [],
    };

    tempObject.name = "Filler Name";
    tempObject.image = ImageDir[countyName][i];
    tempObject.description = CountyDescriptions[countyName][i];
    tempObject.tags.push(CountyTags[countyName][i]);

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
