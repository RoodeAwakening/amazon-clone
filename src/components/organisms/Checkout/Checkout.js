import React from 'react'
import styles from './Checkout.module.css'
import {useStateValue} from '../../../services/StateProvider'
import ProductCart from '../../molecules/ProductCart/ProductCart';
import CheckoutAd from '../../atoms/CheckoutAd/CheckoutAd';
import Subtotal from '../../molecules/Subtotal/Subtotal';



function Checkout({ id, image, title, price, rating, hideButton }) {
  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__left}>
     <CheckoutAd/>

    <div>
      <h3>Hello, {user?.email}</h3>
      <h2 className="checkout__title">Your shopping Basket</h2>

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
    </div>
   
      </div>
      <div className={styles.checkout__right}>
        <Subtotal/>
      </div>
      </div>
  )
}

export default Checkout
