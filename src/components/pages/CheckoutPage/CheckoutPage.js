import { StylesContext } from '@material-ui/styles'
import React from 'react'
import CheckoutAd from '../../atoms/CheckoutAd/CheckoutAd'
import Checkout from '../../organisms/Checkout/Checkout'
import styles from './CheckoutPage.module.css'

function CheckoutPage() {
  return (
    <div className={styles.checkoutPage__container}>
      <CheckoutAd/>
      <Checkout />
    </div>
  )
}

export default CheckoutPage
