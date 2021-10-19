import React from "react";

import ProductTitle from "../../atoms/ProductTitle/ProductTitle";
import ProductPrice from "../../atoms/ProductPrice/ProductPrice";
import ProductRating from "../../atoms/ProductRating/ProductRating";
import ProductImage from '../../atoms/ProductImage/ProductImage'
import ButtonProduct from '../../atoms/ButtonProduct/ButtonProduct'

import styles from "./Product.module.css";

import { useStateValue } from "../../../services/StateProvider";


function Product({ id, buttonText, title, image, rating, price }) {

  const [{basket}, dispatch] = useStateValue()

  const addToBasket = () =>{
  
    // dispatch to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id, 
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }


  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <ProductTitle title={title} />
        <ProductPrice price={price} />
        <ProductRating rating={rating} />
      </div>
      <ProductImage image={image}/>
      <ButtonProduct buttonText={buttonText} onClick={addToBasket}/>
    </div>
  );
}

export default Product;
