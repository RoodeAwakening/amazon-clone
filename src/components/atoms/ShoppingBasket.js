import React from 'react'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import './Atoms.css'

function ShoppingBasket() {
  return (
    <div className="nav__optionBasket">
      <ShoppingBasketIcon/>
      <span className="nav__optionLineTwo nav__basketCount">
        0
      </span>
      
    </div>
  )
}

export default ShoppingBasket
