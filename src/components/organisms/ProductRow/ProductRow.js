import React from 'react'
import Row from '../../atoms/Row/Row'
import Product from '../../molecules/Product/Product'
import styles from './ProductRow.module.css'
import CategoryTitle from '../../atoms/CategoryTitle/CategoryTitle'

function ProductRow() {



  return (
    <>
    
    <CategoryTitle category={'Best Sellers in Health & Household'}/>
    <div className={styles.home__row}>
      <Product
        id={"B00QWO9P0O"}
        buttonText={"Add To Cart"}
        title={"Amazon Basics 4 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"}
        image={"https://m.media-amazon.com/images/I/51netU-Kn6L._AC_SL1072_.jpg"}
        rating={4}
        price={6.96}
        />
      <Product
        id={"B079VP6DH5"}
        buttonText={"Add To Cart"}
        title={"Bounty Quick-Size Paper Towels, 16 Family Rolls = 40 Regular Rolls"}
        image={"https://m.media-amazon.com/images/I/71e4FX1KzIL._AC_SL1500_.jpg"}
        rating={5}
        price={35.68}
        />

      <Product
        id={""}
        buttonText={"Add To Cart"}
        title={"Quest Nutrition High Protein, Chocolate Hazelnut, 12 Count"}
        image={"https://m.media-amazon.com/images/I/81ODZ2tdfxL._AC_SL1500_.jpg"}
        rating={4}
        price={39.95}
        />


  
     </div>
     <CategoryTitle category={'Electronics'}/>
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

     <CategoryTitle category={'Automotive'}/>
     <div className={styles.home__row}>
        <Product 
          id={"Z9VVRSEQDEK4D758588G"}
          buttonText={"Add To Cart"}
          title={"Bosch 3 397 118 934 Wiper Blade"}
          image={"https://m.media-amazon.com/images/I/51UxQr6+PWL._AC_SL1500_.jpg"}
          rating={4}
          price={18.43}
        />
        <Product 
          id={"Z9VVRSEQDEK4D758588G"}
          buttonText={"Add To Cart"}
          title={"THISWORX Car Vacuum Cleaner"}
          image={"https://m.media-amazon.com/images/I/81-9vPPicyL._AC_SL1500_.jpg"}
          rating={4}
          price={35.99}
        />
        <Product 
          id={"Z9VVRSEQDEK4D758588G"}
          buttonText={"Add To Cart"}
          title={"Cleaning Gel for Car, Car Cleaning Kit Universal Detailing Automotive Dust Car Crevice"}
          image={"https://m.media-amazon.com/images/I/71dC6Gdj2lS._AC_SL1500_.jpg"}
          rating={4}
          price={6.99}
        />
     </div>
     <div className={styles.home__row}>
     <Product 
          id={"Z9VVRSEQDEK4D758588G"}
          buttonText={"Add To Cart"}
          title={"Fahren H11/H9/H8 LED Headlight Bulbs, 60W 10000 Lumens Super Bright LED Headlights Conversion Kit 6500K Cool White IP68 Waterproof, Pack of 2"}
          image={"https://m.media-amazon.com/images/I/71eEaDFxb-L._AC_SL1500_.jpg"}
          rating={5}
          price={33.99}
        />
        <Product 
          id={"Z9VVRSEQDEK4D758588G"}
          buttonText={"Add To Cart"}
          title={"Camco RhinoFLEX 10-foot RV Sewer Hose Extension Kit with Swivel Fitting, Frustration Free-Packaging (39774)"}
          image={"https://m.media-amazon.com/images/I/714Btw6rmtL._AC_SL1500_.jpg"}
          rating={5}
          price={19.98}
        />
     </div>
      
    </>
  )
}

export default ProductRow


{/* <Product 
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
        /> */}