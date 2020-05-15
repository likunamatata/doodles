import * as d3 from 'd3';

var margin = { top: 10, right: 20, bottom: 25, left: 25 };
var width = 425 - margin.left - margin.right;
var height = 625 - margin.top - margin.bottom;

export const frame = () => {
  console.log('im running')
  d3.select('.Home')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .style('fill', 'lightblue')
    .style('stroke', 'green');
}


