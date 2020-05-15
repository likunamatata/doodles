import React, { Component } from 'react';
import '../styles/draw.css';
import * as d3 from 'd3';
import {drawBubbles, changeFill} from '.././helpers/bubble-helpers'

class Draw extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      bubbleCount: 10000,
      bubbleArr: d3.range(100000)
    };
  }


  componentDidMount = async () => {
    drawBubbles(this.state.bubbleArr)
  }

  render() {
    const { bubbleArr } = this.state
    const bubbles = bubbleArr.length==0 ? '' : bubbleArr.map(
      bubble => {
        return (
          <p></p>
        )
      }
    )
   
    return (
      <div>
        <h1>Minesweeper but you don't die. Ever.</h1>
        <button onClick={() => this.drawBubbles()}>Click to add more green space</button>
        <div className='bubbles-container'>
        </div>
      </div>
    );
  }
}

export default Draw;
