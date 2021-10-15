import React from 'react'
import NavOptions from '../../atoms/NavOptions/NavOptions'


function NavBlock({textOne, textTwo}) {
  return (
    <div className="nav__option">
      <NavOptions className={"One"} text={textOne}/>
      <NavOptions className={"Two"} text={textTwo}/>
    </div>
  )
}

export default NavBlock
