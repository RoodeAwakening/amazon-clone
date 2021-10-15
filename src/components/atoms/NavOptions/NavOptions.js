import React from "react";
import styles from './NavOptions.module.css'
import './alt.css'


function NavOptions({ className, text }) {
  return (
    <div className={styles.nav__option}>
      {className === "One" ? <span className={`${styles.nav__optionLineOne}`}>{text}</span> :
      <span className={`${styles.nav__optionLineTwo}`}>{text}</span> }
    </div>
  );
}

export default NavOptions;
