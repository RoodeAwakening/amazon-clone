import React from 'react'
import styles from './ProductRating.module.css'

function ProductRating({rating}) {
  return (
    <div className={styles.product__rating}>
         {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
    </div>
  )
}

export default ProductRating
