import React from "react"
import Profiles1 from "./assets/H.png"
import Profiles2 from "./assets/add-friend.png"

function RightMenu() {
  return (
  <>
  <div className="container2">
    <div className="titles">
    <h1>Who To Follow</h1>
    <div className="profiles-foll">
      <p><img src={Profiles1} alt="" className="profiles1" /> <span>huhu</span><img src={Profiles2} alt="" className="add-friends"/></p>
    </div>
    <div className="profiles-foll">
      <p><img src={Profiles1} alt="" className="profiles1" /> <span>huhu</span><img src={Profiles2} alt="" className="add-friends"/></p>
    </div>
    <p className="see-more">See More</p>
    </div>
  </div>
  </>
  )
}

export default RightMenu
