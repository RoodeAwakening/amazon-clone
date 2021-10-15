import React from 'react'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import styles from './ShoppingBasket.module.css'

function ShoppingBasket() {
  return (
    <div className={styles.nav__optionBasket}>
      <ShoppingBasketIcon/>
      <span className={styles.nav__optionLineTwo ,styles.nav__basketCount}>
        0
      </span>
      
    </div>
  )
}

export default ShoppingBasket
