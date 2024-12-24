import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  // Set up the dimensions of the SVG container
  const width = 250;
  const height = 250;
  const radius = Math.min(width, height) / 2; // Ensure the pie fits inside the SVG

  // Define the data
  const data = [
    { category: 'Entertainment', value: 30, color: '#343C6A' },
    { category: 'Investment', value: 20, color: '#396AFF' },
    { category: 'Others', value: 35, color: '#232323' },
    { category: 'Bill Expense', value: 15, color: '#FC7900' },
  ];

  // Create a ref for the SVG container
  const svgRef = useRef();

  useEffect(() => {
    // Cleanup previous SVG (remove any existing chart)
    d3.select(svgRef.current).select('svg').remove();

    // Create the SVG element and attach it to the ref container
    const svg = d3
      .select(svgRef.current) // Select the div (or container) using the ref
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`); // Move the pie chart to the center

    // Create a pie layout function
    const pie = d3
      .pie()
      .value((d) => d.value) // Determine the value for each slice
      .sort(null); // Disable sorting of slices

    // Create an arc generator for the slices
    const arc = d3
      .arc()
      .outerRadius(radius - 10) // Outer radius of the pie chart
      .innerRadius(0); // Inner radius is 0 for a simple pie chart (no hole in the middle)

    // Create the pie slices
    const slices = svg
      .selectAll('.slice')
      .data(pie(data)) // Calculate the pie slices based on the data
      .enter()
      .append('g')
      .attr('class', 'slice');

    // Append each slice (path element) and set the color based on the data
    slices
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => d.data.color);

    // Add white strips (borders) between slices
    slices
      .append('path')
      .attr('d', function (d) {
        const outerArc = d3.arc().outerRadius(radius).innerRadius(radius); // Make this a thin "border" line
        return outerArc(d); // Draw the arc at the edge of the pie chart
      })
      .attr('fill', '#fff'); // Set the border color to white

    // Optionally, add labels and percentage inside each slice
    slices
      .append('text')
      .attr('transform', (d) => {
        const midAngle = (d.startAngle + d.endAngle) / 2; // Calculate the middle angle of the slice
        const x = Math.cos(midAngle) * (radius / 2); // X position of the label
        const y = Math.sin(midAngle) * (radius / 2); // Y position of the label
        return `translate(${x}, ${y})`; // Position the label
      })
      .attr('text-anchor', 'middle')
      .attr('fill', '#fff') // White text color
      .attr('font-size', '14px')
      .text((d) => {
        // Add both category name and percentage
        const percentage = d.data.value;
        return `${d.data.category}\n${percentage}%`; // Display category and percentage
      });
  }, []); // Empty dependency array to ensure the effect runs once on mount

  return <div ref={svgRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default PieChart;
