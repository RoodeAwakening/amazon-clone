import React from 'react'
import './Molecules.css'

import NavBlock from './NavBlock'
import ShoppingBasket from '../atoms/ShoppingBasket/ShoppingBasket'

function Nav() {
  return (
    <div className="nav__nav">
      <NavBlock textOne={"Hello, Sign In"} textTwo={"Account & Lists"}/>
      <NavBlock textOne={"Returns"} textTwo={"& Orders"}/>
      <NavBlock textOne={"Your"} textTwo={"Prime"}/>
      <ShoppingBasket/>
    </div>
  )
}

export default Nav
