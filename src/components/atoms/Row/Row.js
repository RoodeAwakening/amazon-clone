import React from 'react'
import styles from './Row.module.css'

function Row({product}) {
  return (
    <div className={styles.home__row}>
      {product}
    </div>
  )
}

export default Row
