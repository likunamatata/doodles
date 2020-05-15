import * as d3 from 'd3';



export const drawBubbles = (array) => {
  d3.select('.bubbles-container')
    .append('svg')
    .attr('class', 'bubble-frame')
  
    .selectAll('rect')
    .data(array)
    .enter()

    .append('rect')
    .attr("x", (d, i) => i % 100 * 20)
    .attr("y", (d, i) => Math.floor(i / 100) % 100 * 20)
    .attr('class', 'bubble')
    .on('click', function () { d3.select(this).call(changeFill, 'purple') })
}


export const changeFill = (selection, color) => {
  selection.style('fill', color)
}