import React from "react";
import ProfilePic from "./assets/S.png"
import LikeImg from "./assets/like.png"

function MiddleComponents() {
  return (
    <>
    <div className="main-container">
    <div className="container-mid">
      
      <textarea className="w-full p-2 border rounded" style={{ height: '150px' }} placeholder="What Happened Today?">
      </textarea>
      <h1>What's Happening</h1>
      <div className="profile-com">
       <img className="profile-pics" src={ProfilePic} alt="" /> <p className="name-profile">sthrolaja <p className="texts1">1 days ago</p></p>
       <h4>laper</h4>
       <div className="like-comm-share">
       </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default MiddleComponents