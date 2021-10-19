import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import styles from "./ShoppingBasket.module.css";
import { Link } from "react-router-dom";

function ShoppingBasket({basket} ) {

  return (
    <>
    <Link to="/checkout">
      <div className={styles.nav__optionBasket}>
        <ShoppingBasketIcon />
        <span className={(styles.nav__optionLineTwo, styles.nav__basketCount)}>
          {basket?.length}
        </span>
      </div>
    </Link>
    </>
  );
}

export default ShoppingBasket;
