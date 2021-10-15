import React from 'react'
import styles from './ProductImage.module.css'

function ProductImage({image, title}) {
  return (
    <div className={styles.productImage}>

    <img src={image} alt={title}  />
    </div>
  )
}

export default ProductImage
