import React, { useState } from 'react';
import video from "../data/video.js";
import Comments from './Comments.js';

function App() {
  const [areCommentsVisible, setAreCommentsVisible] = useState(true);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const { title, embedUrl, views, createdAt, comments } = video;

  function toggleCommentsVisible() {
    setAreCommentsVisible(areCommentsVisible => !areCommentsVisible);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <div>
        <button id="upvote-button" onClick={() => setUpvotes(upvotes => ++upvotes)}>{upvotes} 👍</button>
        <button id="downvote-button" onClick={() => setDownvotes(downvotes => ++downvotes)}>{downvotes} 👎</button>
      </div>
      <p><button id="comment-toggle-button" onClick={toggleCommentsVisible}>
        {areCommentsVisible
          ? "Hide Comments"
          : "Show Comments"
        }
      </button></p>
      <hr></hr>
      {areCommentsVisible ? <Comments comments={comments}/> : null}
    </div>
  );
}

export default App;
