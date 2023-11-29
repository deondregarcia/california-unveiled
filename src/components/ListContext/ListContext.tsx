import { createContext, ReactNode, useState } from "react";
import { CountyObjectType } from "../../types/types";

const ListContext = createContext<any>([]);

export const ListContextProvider = ({ children }: { children: ReactNode }) => {
  const [locationList, setLocationList] = useState<any>([]);
  const [countyFullAddList, setCountyFullAddList] = useState<any>([]);

  return (
    <ListContext.Provider
      value={{
        locationList,
        setLocationList,
        countyFullAddList,
        setCountyFullAddList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;
