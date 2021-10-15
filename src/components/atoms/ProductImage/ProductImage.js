import React from 'react'

function ProductImage({image, title}) {
  return (
    <img src={image} alt={title} />
  )
}

export default ProductImage
