import React from "react";

import ProductTitle from "../../atoms/ProductTitle/ProductTitle";
import ProductPrice from "../../atoms/ProductPrice/ProductPrice";
import ProductRating from "../../atoms/ProductRating/ProductRating";
import ProductImage from '../../atoms/ProductImage/ProductImage'
import Button from '../../atoms/Button/Button'

import styles from "./Product.module.css";

function Product({ id, buttonText, title, image, rating, price }) {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <ProductTitle title={title} />
        <ProductPrice price={price} />
        <ProductRating rating={rating} />
      </div>
      <ProductImage image={image}/>
      <Button buttonText={buttonText}/>
    </div>
  );
}

export default Product;
