import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineGraph = () => {
  // Sample data (monthly balance)
  const data = [
    { month: 'Jan', balance: 5000 },
    { month: 'Feb', balance: 4000 },
    { month: 'Mar', balance: 3500 },
    { month: 'Apr', balance: 4500 },
    { month: 'May', balance: 4700 },
    { month: 'Jun', balance: 4600 },
    { month: 'Jul', balance: 5000 },
    { month: 'Aug', balance: 5300 },
    { month: 'Sep', balance: 5400 },
    { month: 'Oct', balance: 5800 },
    { month: 'Nov', balance: 6000 },
    { month: 'Dec', balance: 6200 },
  ];

  // Set up margins and dimensions for the graph
  const margin = { top: 10, right: 20, bottom: 40, left: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 275 - margin.top - margin.bottom;

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

    // Create a line generator function with a smooth curve
    const line = d3
      .line()
      .x((d) => xScale(d.month) + xScale.bandwidth() / 2) // Center the line on the X-axis
      .y((d) => yScale(d.balance)) // Set the Y position based on balance
      .curve(d3.curveCatmullRom.alpha(0.5)); // Apply a smooth curve (wave effect)

    // Select the SVG element and set up the container group
    const svg = d3
      .select(svgRef.current) // Select the div using the ref
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Create grid lines (Y-axis horizontal grid lines)
    svg
      .append('g')
      .attr('class', 'grid-y')
      .selectAll('line')
      .data(yScale.ticks())
      .enter()
      .append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', (d) => yScale(d))
      .attr('y2', (d) => yScale(d))
      .attr('stroke', '#e0e0e0') // Light gray color for grid lines
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '4,4') // Dashed lines
      .attr('opacity', 0.5);

    // Create grid lines (X-axis vertical grid lines)
    svg
      .append('g')
      .attr('class', 'grid-x')
      .selectAll('line')
      .data(xScale.domain())
      .enter()
      .append('line')
      .attr('x1', (d) => xScale(d))
      .attr('x2', (d) => xScale(d))
      .attr('y1', 0)
      .attr('y2', height)
      .attr('stroke', '#e0e0e0') // Light gray color for grid lines
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '4,4') // Dashed lines
      .attr('opacity', 0.5);

    // Append the line path based on the data
    svg
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#1814F3') // Line color (border)
      .attr('stroke-width', 3); // Line thickness

    // Add X and Y axes with tick marks
    const xAxisGroup = svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickSize(6)); // Add ticks with size

    // Remove the main domain line from X-axis
    xAxisGroup.selectAll('.domain').remove();

    // Set the color of X-axis labels and ticks
    xAxisGroup
      .selectAll('text')
      .style('fill', '#718EBF') // Change color of labels to #718EBF
      .style('font-size', '12px'); // Optional: Adjust the font size of labels
    xAxisGroup
      .selectAll('.tick line')
      .style('stroke', '#718EBF') // Set color for tick lines
      .style('stroke-width', '2px'); // Adjust tick line width

    const yAxisGroup = svg.append('g').call(d3.axisLeft(yScale).tickSize(6)); // Add ticks with size

    // Remove the main domain line from Y-axis
    yAxisGroup.selectAll('.domain').remove();

    // Set the color of Y-axis labels and ticks
    yAxisGroup
      .selectAll('text')
      .style('fill', '#718EBF') // Change color of labels to #718EBF
      .style('font-size', '12px'); // Optional: Adjust the font size of labels
    yAxisGroup
      .selectAll('.tick line')
      .style('stroke', '#718EBF') // Set color for tick lines
      .style('stroke-width', '2px'); // Adjust tick line width
  }, [data]); // The effect will run once when the component mounts

  return (
    <div className="overflow-x-auto flex">
      <div
        className={`flex justify-center items-center w-[${width}px] h-80`}
        ref={svgRef}
      ></div>
    </div>
  );
};

export default LineGraph;
