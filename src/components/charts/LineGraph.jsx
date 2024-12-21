import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineGraph = () => {
  // Sample data (monthly balance)
  const data = [
    { month: 'January', balance: 5000 },
    { month: 'February', balance: 4000 },
    { month: 'March', balance: 3500 },
    { month: 'April', balance: 4500 },
    { month: 'May', balance: 4700 },
    { month: 'June', balance: 4600 },
    { month: 'July', balance: 5000 },
    { month: 'August', balance: 5300 },
    { month: 'September', balance: 5400 },
    { month: 'October', balance: 5800 },
    { month: 'November', balance: 6000 },
    { month: 'December', balance: 6200 },
  ];

  // Set up margins and dimensions for the graph
  const margin = { top: 20, right: 20, bottom: 40, left: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Create a reference to the chart container
  const svgRef = useRef();

  useEffect(() => {
    d3.select(svgRef.current).select('svg').remove();

    // Set up scales for X and Y axes
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month)) // Set the domain based on months
      .range([0, width])
      .padding(0.1); // Add padding between bars

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.balance) + 1000]) // Set the domain based on balance values
      .nice()
      .range([height, 0]); // Reverse the Y axis so 0 is at the bottom

    // Create a line generator function
    const line = d3
      .line()
      .x((d) => xScale(d.month) + xScale.bandwidth() / 2) // Center the line on the X-axis
      .y((d) => yScale(d.balance)); // Set the Y position based on balance

    // Select the SVG element and set up the container group
    const svg = d3
      .select(svgRef.current) // Select the div using the ref
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Append the line path based on the data
    svg
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#1814F3') // Line color (border)
      .attr('stroke-width', 3); // Line thickness

    // Add X and Y axes
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(0)); // X-axis with no ticks (no labels)

    svg.append('g').call(d3.axisLeft(yScale).ticks(0)); // Y-axis with no ticks (no labels)
  }, [data]); // The effect will run once when the component mounts

  return <div ref={svgRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default LineGraph;
