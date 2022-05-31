import React, { createContext, useState } from "react";
const dataContext = createContext();
function DataProvider({ children }) {
  const [size, setSize] = useState("");

  return (
    <dataContext.Provider value={{ size, setSize }}>
      {children}
    </dataContext.Provider>
  );
}
export { dataContext, DataProvider };
