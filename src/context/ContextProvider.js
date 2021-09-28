import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const context = {
    setSearch,
    search,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
