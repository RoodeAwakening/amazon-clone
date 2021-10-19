import React from 'react'
import styles from './CategoryTitle.module.css'

function CategoryTitle({category}) {
  return (
    <>
      <h2 className={styles.category__title}>{category}</h2>
    </>
  )
}

export default CategoryTitle
