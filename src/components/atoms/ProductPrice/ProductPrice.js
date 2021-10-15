import React from 'react'
import styles from './ProductPrice.module.css'

function ProductPrice({price}) {
  return (
    <p className={styles.product__price}>
      <small>$</small>
      <strong>{price}</strong>
    </p>
  )
}

export default ProductPrice
