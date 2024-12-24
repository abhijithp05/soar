import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  // Set up the dimensions of the SVG container
  const width = 250;
  const height = 250;
  const radius = Math.min(width, height) / 2; // Base radius for the chart

  // Define the data with values
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
      .innerRadius(0) // Inner radius is 0 for a simple pie chart (no hole in the middle)
      .outerRadius((d) => radius - 10 + (d.data.value / 100) * 50); // Vary the outer radius based on the value (adding a factor for size variation)

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
      .attr('fill', (d) => d.data.color) // Set the color of the slice
      .attr('stroke', '#fff') // Add a white stroke to separate the slices
      .attr('stroke-width', 4) // Set the thickness of the separation line
      .attr('filter', 'url(#drop-shadow)'); // Add a drop-shadow filter for 3D effect

    // Optionally, add labels and percentage inside each slice
    slices
      .append('text')
      .attr('transform', (d) => {
        // Calculate the middle angle of the slice
        const midAngle = (d.startAngle + d.endAngle) / 2;
        // const fixedRadius = radius - 30;
        // Position the label in the middle of the slice using the radius
        const x = Math.cos(midAngle) * ((d.data.value / 100) * (radius - 95)); // X position in the middle
        const y = Math.sin(midAngle) * ((d.data.value / 100) * (radius - 95)); // Y position in the middle

        // const x = Math.cos(midAngle) * fixedRadius; // X position in the middle
        // const y = Math.sin(midAngle) * fixedRadius;

        return `translate(${x}, ${y})`; // Position the label
      })
      .attr('text-anchor', 'middle') // Center-align the text
      .attr('fill', '#fff') // White text color
      .attr('font-size', '12px') // Font size
      .text((d) => {
        // Add both category name and percentage inside the slice
        const percentage = d.data.value;
        return `${percentage}% \n${d.data.category}`; // Display category and percentage
      });
  }, []); // Empty dependency array to ensure the effect runs once on mount

  return (
    <div
      ref={svgRef}
      className="w-full h-[400px] flex justify-center items-center"
    >
      <svg>
        {/* Define drop-shadow filter */}
        <defs>
          <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="3" result="blurred" />
            <feOffset dx="4" dy="4" in="blurred" result="offsetBlur" />
            <feFlood floodColor="rgba(0,0,0,0.5)" result="color" />
            <feComposite in2="offsetBlur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feComposite operator="over" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default PieChart;
