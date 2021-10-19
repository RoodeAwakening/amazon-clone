import React from 'react'
import styles from './ButtonProduct.module.css'

function ButtonProduct({buttonText, onClick}) {
  return (
    <button onClick={onClick} className={styles.button}>
      {buttonText}
    </button>
  )
}

export default ButtonProduct
