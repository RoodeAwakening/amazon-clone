import React from 'react'
import styles from './Nav.module.css'
import { Link } from "react-router-dom";

import { auth } from "../../../firebase";

import NavBlock from '../NavBlock/NavBlock'
import ShoppingBasket from '../../atoms/ShoppingBasket/ShoppingBasket'

import { useStateValue } from "../../../services/StateProvider";

function Nav() {
  const [{ basket, user }, dispatch] = useStateValue();


  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div className={styles.nav__nav}>
      <Link to={!user && './login'}>
      <div onClick={handleAuthenticaton} className="header__option">
      <NavBlock textOne={`Hello, ${!user ? "Guest": user.email}`} textTwo={`${user ? "Sign Out" : "Sign In"}`}/>
      </div>
      </Link>

      <Link to={'./orders'}>
      <NavBlock textOne={"Returns"} textTwo={"& Orders"}/>
      </Link>

      <NavBlock textOne={"Your"} textTwo={"Prime"}/>

      <Link to={'./checkout'}>
      <ShoppingBasket basket={basket}/>
      </Link>
    </div>
  )
}

export default Nav
