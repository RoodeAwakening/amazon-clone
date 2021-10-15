import React from 'react'
import './Atoms.css'

function ProductPrice({price}) {
  return (
    <p className="product__price">
      <small>$</small>
      <strong>{price}</strong>
    </p>
  )
}

export default ProductPrice
