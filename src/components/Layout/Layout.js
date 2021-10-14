import React from 'react'
import NavBar from '../organisms/NavBar';

import styles from './Layout.module.css';

function Layout({children}) {
  return (
    <div className={styles.container}>
      <NavBar/>
      {children}
    </div>
  )
}

export default Layout
