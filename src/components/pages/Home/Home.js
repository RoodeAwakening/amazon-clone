import React from 'react'
import HeaderImage from '../../atoms/HeaderImage/HeaderImage'
import Product from '../../molecules/Product'

import './Home.css'

function Home() {
  return (
    <div className="home">
      <HeaderImage/>
      <Product
      id="12321341"
      title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
      />
    </div>
  )
}

export default Home
