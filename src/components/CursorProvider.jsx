"use client";
import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }) => {
  const [magnifierActive, setMagnifierActive] = useState(false);
  return (
    <CursorContext.Provider value={{ magnifierActive, setMagnifierActive }}>
      {children}
    </CursorContext.Provider>
  );
};
