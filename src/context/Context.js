import React, { useContext, useReducer } from "react";

import AppContext from "./AppContext";
import reducer from "../state/reducer";
import initialState from "../state/initialState";

const AppProvider = ({ children }) => {
 
  return (
    <AppContext.Provider
      value={{
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
