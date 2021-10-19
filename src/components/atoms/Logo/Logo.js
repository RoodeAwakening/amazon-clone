import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        className={styles.nav__logo}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />
    </Link>
  );
}

export default Logo;
