export interface CountyObjectType {
  name: string;
  countyIndex: number | null;
  countyNameShort: string;
  image: any | null;
  description: string;
  tags: string[];
}

export interface CountyObjectLoaderType {
  [key: string]: CountyObjectType[];
}

export interface CountyDescriptionsType {
  [key: string]: string[];
}

export interface CountyTagsType {
  [key: string]: string[];
}
