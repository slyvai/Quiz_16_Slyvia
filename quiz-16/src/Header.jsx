import React from "react";
import Verified from "./assets/check.png"


function Header() {
  return (
    <>
    <div className="containers">
      <div className="logo">
        <p>SO<span className="logo2">CIO.</span></p>
      </div>
      <div className="images">
      <p><img src={Verified} alt="" /> verified </p>
      <select>
        <option>apaaja21</option>
      </select>
      </div>
    </div>
    </>
  )
}

export default Header;