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
      <NavBlock textOne={`Hello, ${!user ? "Guest": user.email}`} textTwo={`${user ? "Sign Out" : "Sign In"}`}/>
      </Link>

      <NavBlock textOne={"Returns"} textTwo={"& Orders"}/>
      <NavBlock textOne={"Your"} textTwo={"Prime"}/>
      <ShoppingBasket basket={basket}/>
    </div>
  )
}

export default Nav
