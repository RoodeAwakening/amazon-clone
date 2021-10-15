import React from 'react'
import styles from './HeaderImage.module.css'

function HeaderImage() {

  const imageSource = 'https://m.media-amazon.com/images/I/71iVoeCOgRL._SX3000_.jpg'

  return (
    <img
    className={styles.home__image}
    src={imageSource}
    alt="header_image"
  />
  )
}

export default HeaderImage
