"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, ReactNode, useState } from "react";

interface UserContextProps {
  CurrentRoute: string;
}
const MyUniversalContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UniversalProvider = ({ children }: { children: ReactNode }) => {
  const CurrentRoute = usePathname();

  return (
    <MyUniversalContext.Provider value={{ CurrentRoute }}>
      {children}
    </MyUniversalContext.Provider>
  );
};

export const UniversalContext = () => {
  const context = useContext(MyUniversalContext);
  if (!context) {
    throw new Error("UniversalContext must be used within a UniversalProvider");
  }
  return context;
};
