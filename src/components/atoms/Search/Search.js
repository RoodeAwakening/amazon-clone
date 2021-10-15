import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import styles from './Search.module.css'

function Search() {
  return (

    <div className={styles.nav__search}>
      <input className={styles.nav__searchInput} type="text" />
      <SearchIcon className={styles.nav__searchIcon} />
    </div>

  );
}

export default Search;
