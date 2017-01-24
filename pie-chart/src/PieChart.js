import React from 'react';
import { pie, arc } from 'd3-shape';
import { scaleOrdinal } from 'd3-scale';
import './PieChart.css';

const width = 960;
const height = 500;
const radius = Math.min(width, height) / 2;

const dataArc = arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

const labelArc = arc()
  .outerRadius(radius - 40)
  .innerRadius(radius - 40);

const colour = scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

const pieChart = pie()
  .sort(null)
  .value(d => d.value);

const PieChart = ({ data }) => (
  <svg width={width} height={height}>
    <g transform={`translate(${width / 2}, ${height / 2})`}>
      {pieChart(data).map((d, i) => (
        <g key={i} className="arc">
          <path
            d={dataArc(d)}
            fill={colour(d.data.label)}
          />

          <text
            dy=".35em"
            transform={`translate(${labelArc.centroid(d)})`}
          >
            {d.data.label}
          </text>
        </g>
      ))}
    </g>
  </svg>
);

export default PieChart;
