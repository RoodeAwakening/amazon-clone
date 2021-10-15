import React from 'react'
import './Atoms.css'

function ProductTitle({title}) {
  return (
    <div className="product__title">
      <p>{title}</p>
    </div>
  )
}

export default ProductTitle
