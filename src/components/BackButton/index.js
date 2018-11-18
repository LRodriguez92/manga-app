import React from 'react';
import './index.css';

export default function BackButton(props) {
  return (
    <div
      className="back-button"
      onClick={props.homeView}
      ><i className="fas fa-angle-left"></i>
    </div>
  )
}
