import React from "react";

function NavOptions({ className, text }) {
  return (
    <div className="nav__option">
      <span className={`nav__optionLine${className}`}>{text}</span>
    </div>
  );
}

export default NavOptions;
