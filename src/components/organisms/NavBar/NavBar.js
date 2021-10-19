import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import Search from '../../atoms/Search/Search'
import Nav from '../../molecules/Nav/Nav'

import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.nav}>
      <Logo/>
      <Search/>
      <Nav/>
    </div>
  )
}

export default NavBar
