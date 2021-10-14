import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./Atoms.css";

function Search() {
  return (
    <div className="nav__search">
      <input className="nav__searchInput" type="text" />
      <SearchIcon className="nav__searchIcon" />
    </div>
  );
}

export default Search;
