import React from 'react'
import './Molecules.css'

import ProductTitle from '../atoms/ProductTitle/ProductTitle'

function Product({buttonText, title, image, rating}) {
  return (
    <div className="product">
      <ProductTitle/>
      
    </div>
  )
}

export default Product
