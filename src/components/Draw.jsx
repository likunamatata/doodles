import React, { Component } from 'react';
import '../styles/draw.css';
import * as d3 from 'd3';

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
    this.fillBubbles(this.state.bubbleCount)
    this.drawBubbles()
  }

  fillBubbles = () => {
    for (let i = 1; i < this.state.bubbleCount+1; i++){
      this.state.bubbleArr.push(i)
    }
  }
  
  drawBubbles = () => {
    console.log(this.state.bubbleArr)
    d3.select('.bubbles-container')
      .append('svg')
      .selectAll('rect')
        .data(this.state.bubbleArr)
        .enter()
        .append('rect')
      .attr("x", (d,i) => i%100 * 20)
      .attr("y", (d,i) => Math.floor(i/100)%100 * 20)
      .attr('class', 'bubble')
    .on('click', function (){d3.select(this).attr('class', 'clicked')})
  }


  render() {
    const { bubbleArr } = this.state
    console.log(bubbleArr)
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
