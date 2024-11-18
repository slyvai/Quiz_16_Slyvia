import { useState } from "react";
import { Heart, User } from 'lucide-react';
import ProfilePics from "./assets/S.png"
import LikePics from "./assets/like.png"

function MiddleComponents() {
  const [history, setHistory] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setCount(prevState => prevState + (isLiked ? -1 : 1)); 
    setIsLiked(!isLiked); 
  };

  const maxLength = 150;

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    } else {
      alert('Max Limit Character are 150!');
    }
  };

  const handleShare = () => {
    if (!text.trim()) return;

    const currentDate = new Date().toLocaleDateString();
    const newHistoryEntry = { 
      text: text, 
      date: currentDate,
      id: Date.now(),
      likes: 0,
      isLiked: false
    };

    setHistory([...history, newHistoryEntry]);
    setText('');
  };

  return (
    <div className="main-container">
      <div className="container-mid">
        <div className="input-area">
          <div className="user-input">
            <div className="profile-icon">
             <img className="profile-pics" src={ProfilePics} alt="" />
            </div>
            <div className="input-content">
              <textarea 
                className="comment-input"
                style={{ height: '100px', width:'750px'}}
                placeholder="What Happened Today?"
                value={text}
                onChange={handleChange}
              />
              <div className="input-footer">
                <p className="char-count">{text.length}/{maxLength}</p>
                <button onClick={handleShare} className="send-button">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>

        <h1 className="section-title">What's Happening</h1>
        <div className="comments-container">
          {history.map((entry) => (
            <div key={entry.id} className="comment-card">
              <div className="comment-content">
                <div className="profile-icon small">
                  <img src={ProfilePics} alt="" />
                </div>
                <div className="comment-body">
                  <div className="comment-header">
                    <span className="username">sl</span>
                    <span className="date">{entry.date}</span>
                  </div>
                  <p className="comment-text">{entry.text}</p>
                  <div className="interaction-buttons">
                    <button className="like-button" onClick={handleLike}>
                      <img src={LikePics} alt="" />
                      ({count})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiddleComponents;