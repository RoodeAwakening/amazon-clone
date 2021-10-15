import React from 'react'
import styles from './Nav.module.css'

import NavBlock from '../NavBlock/NavBlock'
import ShoppingBasket from '../../atoms/ShoppingBasket/ShoppingBasket'

function Nav() {
  return (
    <div className={styles.nav__nav}>
      <NavBlock textOne={"Hello, Sign In"} textTwo={"Account & Lists"}/>
      <NavBlock textOne={"Returns"} textTwo={"& Orders"}/>
      <NavBlock textOne={"Your"} textTwo={"Prime"}/>
      <ShoppingBasket/>
    </div>
  )
}

export default Nav
