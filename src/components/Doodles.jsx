import React from 'react';
import '../styles/doodles.css'


function Doodles() {
  return (
    <div className="Doodles">
      <svg id='ctr'>
        <rect id='rect' ></rect>
        <circle id='circle'></circle>
        <ellipse id='el'></ellipse>
        <line id='line' x1='0' x2='100' y1='0' y2='100'></line>
        <polygon id='polyg' points='220, 10,  123,234 300, 210  170,250'></polygon>
        <polyline id='polyl' points='220, 10,  123,234 300, 210  170,250'></polyline>
        <path
          id='path'
          d='M500,500 L300,150 L300,300 L200,400 L500,500'
          >
        </path>
      </svg>
       
    </div>
  );
}

export default Doodles;