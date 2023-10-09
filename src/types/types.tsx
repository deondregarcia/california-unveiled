export interface CountyObjectType {
  name: string;
  countyIndex: number | null;
  countyNameShort: string;
  countyNameFull: string;
  image: any | null;
  description: string;
  tags: (string | string[])[];
}

export interface CountyObjectLoaderType {
  [key: string]: CountyObjectType[];
}

export interface CountyDescriptionsType {
  [key: string]: string[];
}

export interface CountyTagsType {
  [key: string]: (string | string[])[];
}

export interface LocationNamesType {
  [key: string]: string[];
}
