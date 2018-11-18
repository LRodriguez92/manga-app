import React from 'react';
import './index.css';

export default function BackButton(props) {
  return (
    <div
      className="back-button"
      onClick={props.previousView}
      ><i class="fas fa-angle-left"></i>
    </div>
  )
}
