import React from 'react'
import Row from '../../atoms/Row/Row'
import Product from '../../molecules/Product/Product'
import styles from './ProductRow.module.css'

function ProductRow() {



  return (
    <>
    
    <div className={styles.home__row}>
        <Product 
          id={"12321341"}
          buttonText={"Add To Cart"}
          title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"}
          image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}
          rating={5}
          price={11.96}
        />
        <Product 
          id={"49538094"}
          buttonText={"Add To Cart"}
          title={"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"}
          image={"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"}
          rating={4}
          price={239.99}
        />
     </div>
     
     <div className={styles.home__row}>
        <Product 
          id={"4903850"}
          buttonText={"Add To Cart"}
          title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"}
          image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}
          rating={3}
          price={199.99}
        />
        <Product 
          id={"23445930"}
          buttonText={"Add To Cart"}
          title={"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"}
          image={"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}
          rating={5}
          price={98.99}
        />
        <Product 
          id={"3254354345"}
          buttonText={"Add To Cart"}
          title={"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"}
          image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}
          rating={4}
          price={598.99}
        />
     </div>
     <div className={styles.home__row}>
     <Product 
          id={"90829332"}
          buttonText={"Add To Cart"}
          title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"}
          image={"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}
          rating={4}
          price={1094.98}
        />

     </div>
      
    </>
  )
}

export default ProductRow
