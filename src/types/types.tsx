export interface CountyObjectType {
    name: string;
    countyIndex: number | null;
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