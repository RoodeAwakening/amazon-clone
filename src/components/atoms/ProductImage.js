import React from 'react'
import './Atoms.css'

function ProductImage({image, title}) {
  return (
    <img src={image} alt={title} />
  )
}

export default ProductImage
