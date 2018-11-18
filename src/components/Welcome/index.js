import React from 'react';
import './index.css';

export default function Welcome(props) {
  return (
    <div className="welcome-container">
      <div className="content">
        <h1>Welcome to Manga Search!</h1>
        <p>Use this app to search well known mangas by category</p>
        <p>Learn about when each manga was released, who created it, and what it's about</p>
        <p>You can even add mangas to your favorites in order to view them later</p>
        <button onClick={props.homeView}>Get Started!</button>
      </div>
    </div>
  )
}
