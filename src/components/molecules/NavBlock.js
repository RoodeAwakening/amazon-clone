import React from 'react'
import NavOptions from '../atoms/NavOptions'

import './Molecules.css'

function NavBlock({textOne, textTwo}) {
  return (
    <div className="nav__option">
      <NavOptions className={"One"} text={textOne}/>
      <NavOptions className={"Two"} text={textTwo}/>
    </div>
  )
}

export default NavBlock
