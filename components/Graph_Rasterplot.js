import React, { useEffect ,useState} from 'react'
import {ScatterChart,
        XAxis,
        YAxis,
        CartesianGrid,
        Scatter,
        Label} from "recharts"
import * as d3 from 'd3'

//const data_loaded = import('Mongillo2008_Reproduce_Fig2B-gpopout095_Rasterplot_Pop0.csv');

const Graph_Rasterplot = props => {

  const [data,setData] = useState([]);

  useEffect(() =>{
   d3.csv('/Mongillo2008_Reproduce_Fig2B-gpopout095_Rasterplot_Pop0.csv').then(data =>{
     setData(data);
     console.log("loadingData")
   })
  },[]);

  return (
    <div>
     <ScatterChart
       width={600}
       height={400}
       margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
       <CartesianGrid />
       <XAxis type="number" dataKey={"time"} name="time" domain={[0, 4]}>
            <Label value="Time"
                   dy={20}/>
       </XAxis>
       <YAxis type="number" dataKey={"neuron_id"} name="Neuron id"  domain={[0,800]} text="sda">
          <Label value="Neuron #"
              dx={-20}
              angle={-90}/>
       </YAxis>
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
