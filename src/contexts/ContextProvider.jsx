import React, { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [searchText, setSearchText] = useState("");
  // Will remove this later if the user object is available
  const [user, setUser] = useState(true);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        user,
        setUser,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
