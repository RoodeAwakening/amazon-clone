import React from "react";
import { Link } from "react-router-dom";

import styles from "./LogoSignIn.module.css";

function LogoSignIn() {
  return (
    <Link to="/">
      <img
        className={styles.nav__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon Logo"
      />
    </Link>
  );
}

export default LogoSignIn;
