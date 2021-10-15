import React from "react";
import styles from 'NavOptions.module.css'


function NavOptions({ className, text }) {
  return (
    <div className={styles.nav__option}>
      <span className={`${styles}.nav__optionLine${className}`}>{text}</span>
    </div>
  );
}

export default NavOptions;
