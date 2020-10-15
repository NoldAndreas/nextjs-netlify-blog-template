import React from "react";
import { scaleLinear } from "d3-scale";
import {extent} from "d3-array"
import AxisLeft from '../components/AxisLeft'

// Following tutorial by:
//https://dev.to/julienassouline/let-s-get-started-with-react-and-d3-2nd7

function RandomData() {
 const data = [...Array(100)].map((e, i) => {
    return {
      x: Math.random() * 40,
      y: Math.random() * 40,
      temparature: Math.random() * 500
    };
  });
  return data;
}

function Scatter() {
   const data = RandomData(),
      w = 600,
      h = 600,
      margin = {
        top: 40,
        bottom: 40,
        left: 40,
        right: 40
      };

  const width = w - margin.right - margin.left,
     height = h - margin.top - margin.bottom;

  const xScale = scaleLinear()
    .domain(extent(data, d => d.x))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, d => d.y))
    .range([height, 0]);

  const circles = data.map((d, i) => (
      <circle
        key={i}
        r={5}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        style={{ fill: "lightblue"}}
      />
    ));
  console.log(data);

  return (
    <div>
      <svg width={w} height={h}>
        <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisLeft yScale={yScale} width={width} />
        {circles}
        </g>
      </svg>
    </div>
  );
}

export default Scatter;


//<button onClick={() => dispatch(pieDataUpdateActionFunction())}>
