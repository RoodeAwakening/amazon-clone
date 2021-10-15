import React from 'react'
import styles from './ProductTitle.module.css'
function ProductTitle({title}) {
  return (
    <div className={styles.product__title}>
      <p>{title}</p>
    </div>
  )
}

export default ProductTitle
