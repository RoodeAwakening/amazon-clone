import React from 'react'
import styles from './Checkout.module.css'
import {useStateValue} from '../../../services/StateProvider'
import ProductImage from '../../atoms/ProductImage/ProductImage';
import ProductCart from '../../molecules/ProductCart/ProductCart';



function Checkout({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();


  return (
    <>

    {/* map through basket to get products */}
    {basket.map(item => (
      <ProductCart
      key={item.id}
      id={item.id}
      image={item.image}
      title={item.title}
      price={item.price}
      rating={item.rating}
      />
      ))}
      
      </>
  )
}

export default Checkout
