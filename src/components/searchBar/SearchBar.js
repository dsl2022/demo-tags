import React, { useContext, useState } from "react";
import AppContext from "../../context";

export default function SearchBar() {
  // const [search, setSearch] = useState("");
  const [searchString, setSearchString] = useState("");
  const { search, setSearch } = useContext(AppContext);
  function handleSearchOnChange(e) {
    setSearchString(e.target.value);
    setSearch(e.target.value);
  }
  return (
    <nav>
      <input
        onChange={handleSearchOnChange}
        value={search}
        placeholder="search"
      />
    </nav>
  );
}
