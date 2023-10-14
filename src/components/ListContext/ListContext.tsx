import { createContext, ReactNode, useState } from "react";
import { CountyObjectType } from "../../types/types";

const ListContext = createContext<any>([]);

export const ListContextProvider = ({ children }: { children: ReactNode }) => {
  const [locationList, setLocationList] = useState<any>([]);

  return (
    <ListContext.Provider value={{ locationList, setLocationList }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;
