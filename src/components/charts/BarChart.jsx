import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  // Sample data: Withdrawals and Deposits for each weekday
  const data = [
    { weekday: 'Monday', deposit: 200, withdrawal: 50 },
    { weekday: 'Tuesday', deposit: 150, withdrawal: 100 },
    { weekday: 'Wednesday', deposit: 300, withdrawal: 75 },
    { weekday: 'Thursday', deposit: 250, withdrawal: 120 },
    { weekday: 'Friday', deposit: 400, withdrawal: 90 },
  ];

  // Set chart dimensions and margins
  const width = 700;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 120, left: 50 };

  // Create a reference to the chart container (SVG element)
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Set up scales for X and Y axes
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.weekday))
      .range([margin.left, width - margin.right])
      .padding(0.4); // Set padding between bars

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.deposit, d.withdrawal))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Create bars for deposit and withdrawal
    const bars = svg
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(${xScale(d.weekday)}, 0)`);

    // Deposit bars (background: #396AFF)
    bars
      .append('rect')
      .attr('x', 0)
      .attr('y', (d) => yScale(d.deposit))
      .attr('width', 15) // Fixed width for the bars
      .attr('height', (d) => height - margin.bottom - yScale(d.deposit))
      .attr('fill', '#396AFF')
      .attr('rx', 8) // Rounded corners for deposit bars
      .attr('ry', 8);

    // Withdrawal bars (background: #232323)
    bars
      .append('rect')
      .attr('x', 20) // Offset to prevent overlap with deposit bars
      .attr('y', (d) => yScale(d.withdrawal))
      .attr('width', 15) // Fixed width for the bars
      .attr('height', (d) => height - margin.bottom - yScale(d.withdrawal))
      .attr('fill', '#232323')
      .attr('rx', 8) // Rounded corners for withdrawal bars
      .attr('ry', 8);

    // Add X Axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .style('text-anchor', 'middle')
      .style('fill', '#718EBF') // Set X axis labels color
      .style('font-size', '12px');

    // Add Y Axis without the line
    const yAxisGroup = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .style('fill', '#718EBF') // Set Y axis labels color
      .style('font-size', '12px')
      .style('stroke', 'none');

    // Remove the main Y-axis line
    yAxisGroup.selectAll('.domain').remove(); // `.domain` targets the main Y-axis line

    // Add Y-Axis Solid Grid Lines (Light Color)
    svg
      .append('g')
      .attr('transform', `translate(${margin.left - 40}, 0)`)
      .selectAll('line')
      .data(yScale.ticks())
      .enter()
      .append('line')
      .attr('x1', margin.left)
      .attr('x2', width - margin.right)
      .attr('y1', (d) => yScale(d))
      .attr('y2', (d) => yScale(d))
      .attr('stroke', '#E1E1E1') // Light gray color for grid lines
      .attr('stroke-width', 1)
      .attr('opacity', '20%')
      .lower(); // Lower the grid lines so they appear behind the bars

    const legend = svg
      .append('g')
      .attr('transform', `translate(${margin.left + 400}, ${margin.top - 30})`); // Legends above the chart

    // Deposit Legend
    legend
      .append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#396AFF')
      .attr('rx', 10) // Rounded corners for the legend box
      .attr('ry', 10);
    legend
      .append('text')
      .attr('x', 30)
      .attr('y', 15)
      .text('Deposits')
      .style('font-size', '14px')
      .style('fill', '#718EBF');

    // Withdrawal Legend
    legend
      .append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('x', 100)
      .attr('fill', '#232323')
      .attr('rx', 10) // Rounded corners for the legend box
      .attr('ry', 10);
    legend
      .append('text')
      .attr('x', 130)
      .attr('y', 15)
      .text('Withdrawals')
      .style('font-size', '14px')
      .style('fill', '#718EBF');
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
