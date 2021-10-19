import React from "react";
import styles from "./ButtonRegister.module.css";

function ButtonRegister({onClick}) {
  return (
    <button className={styles.login__registerButton}
    onClick={onClick}
    >
      Create your Amazon Account
    </button>
  );
}

export default ButtonRegister;
