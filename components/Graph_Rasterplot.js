import React, { useEffect ,useState} from 'react'
import {ScatterChart,
        XAxis,
        YAxis,
        CartesianGrid,
        Scatter} from "recharts"
import * as d3 from 'd3'

const data_hardcoded = [
  { x: 10, y: 180 },
  { x: 20, y: 200 },
  { x: 50, y: 380 },
  { x: 70, y: 50 },
  { x: 90, y: 200 },
  { x: 210, y: 50 }
];

const Graph_Rasterplot = props => {

  const [data,setData] = useState([]);
  useEffect(() =>{
   d3.csv('/Mongillo2008_Reproduce_Fig2B-gpopout095_Rasterplot.csv').then(data =>{
     setData(data);
   })
 });

/*  const [data,setData] = useState();
  useEffect(() =>{
    setData(TABLE_LIST_1);
    console.log(data);
  });*/


  return (
    <div>
     <ScatterChart
       width={600}
       height={400}
       margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
       <CartesianGrid />
       <XAxis type="number" dataKey={"time"} name="time" domain={[0, 4]}/>
       <YAxis type="number" dataKey={"neuron_id"} name="Neuron id"  domain={[0, 4000]}/>
      <Scatter
          name="Median"
          data={data}
          fill="#8884d8"
          shape="circle"
        />
        </ScatterChart>
    </div>
  )
}

export default Graph_Rasterplot
