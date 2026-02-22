"use client";

import { createContext } from "react";

import data from "@/store/data";

const AppContext = createContext(data);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppContext;
