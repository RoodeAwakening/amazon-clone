import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import React from 'react'
import Logo from '../atoms/Logo'
import Search from '../atoms/Search'
import Nav from '../molecules/Nav'
import NavBlock from '../molecules/NavBlock'

import './Organisms.css'

function NavBar() {
  return (
    <div className="nav">
      <Logo/>
      <Search/>
      <Nav/>
    </div>
  )
}

export default NavBar
