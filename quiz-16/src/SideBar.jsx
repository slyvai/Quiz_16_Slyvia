import React from "react";
import HomeImage from "./assets/home-smile.png"
import NotificationImage from "./assets/app-indicator.svg"
import MessageImage from "./assets/message.png"
import UserImage from "./assets/user.png"
import "./index.css"

function SideBar() {
  return (
    <>
    <div className="container2">
  <div className="imagess1">
    <p className="texts"><img src={HomeImage} alt="" /> Home</p>
    <p><img src={NotificationImage} alt="" />Notification</p>
    <p><img src={MessageImage} alt="" />Messages</p>
    <p><img src={UserImage} alt="" />Profile</p>
    <div className="button-trd">
      <button>Trending</button>
    </div>
  </div>
  </div>

  </>
  )
}

export default SideBar ;