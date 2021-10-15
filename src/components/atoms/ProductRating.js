import React from 'react'
import './Atoms.css'

function ProductRating({rating}) {
  return (
    <div className="product__rating">
         {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
    </div>
  )
}

export default ProductRating
