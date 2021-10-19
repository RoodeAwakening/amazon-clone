import React ,{useEffect, useState} from 'react'
import styles from './Subtotal.module.css'
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import {useStateValue} from '../../../services/StateProvider'
import {getBasketTotal } from '../../../services/reducer'

function Subtotal() {

  const history = useHistory()
  const [{basket}, dispatch] = useStateValue()
  const [cartTotal, setCartTotal] = useState(0)
  console.log(basket.price);
  
// get all items from basket and add item.price together and round to 2 decimal places
  useEffect(() => {
    let total = 0;
    basket.map(item => (total += item.price))
    // round setCartTotal to 2 decimal places
    setCartTotal(Math.round(total * 100) / 100)
  }, [basket])


  return (
    <div className={styles.subtotal}>
   
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>${cartTotal}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
     

            <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
