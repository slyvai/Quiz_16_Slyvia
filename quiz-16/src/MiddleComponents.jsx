import {useState} from "react";
import ProfilePic from "./assets/S.png"
import LikeImg from "./assets/like.png"

function MiddleComponents() {
  const [text, setText] = useState('');
const maxLength = 150;

const handleSubmit = () => {
  console.log('Pesan:', text);
  setText('');
};

const handleChange = (e) => {
  const newText = e.target.value;
  if (newText.length <= maxLength) {
    setText(newText);
  } else {
    alert('Max Limit Character are 150!');
  }
};

  return (
    <>
    <div className="main-container">
    <div className="container-mid">
      <div className="area-com">
      <img className="profiles" src={ProfilePic} alt="" />
      <textarea className="comments" style={{ height: '100px' }} placeholder="What Happened Today?" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Kirim</button>
      <p>{text}</p>
      <p>{text.length}/{maxLength}</p>
      </div>
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