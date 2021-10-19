import React from "react";

import ProductTitle from "../../atoms/ProductTitle/ProductTitle";
import ProductPrice from "../../atoms/ProductPrice/ProductPrice";
import ProductRating from "../../atoms/ProductRating/ProductRating";
import ProductImage from '../../atoms/ProductImage/ProductImage'
import ButtonProduct from '../../atoms/ButtonProduct/ButtonProduct'

import styles from "./ProductCart.module.css";

import { useStateValue } from "../../../services/StateProvider";


function ProductCart({ id, hidebutton, title, image, rating, price }) {

  const [{basket}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
}


  return (
    <div className={styles.checkoutProduct} >
      
      <div className={styles.checkoutProduct__image__container}>
      <ProductImage image={image} className={styles.checkoutProduct__image}/>

      </div>
      
        
      <div className={styles.checkoutProduct__info}>

        <ProductTitle title={title} />
        <ProductPrice price={price} />
        <ProductRating rating={rating} />
      
      {!hidebutton && <ButtonProduct buttonText={'Remove from Basket'} onClick={removeFromBasket} />}
      </div>
    </div>
  );
}

export default ProductCart;
