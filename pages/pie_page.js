import React, {useState,useEffect} from 'react'
import Pie from '../components/pie'
import {generateRandomValues} from '../lib/randomDataGenerator'


export default function pie_page() {
  
  const [data,setData] = useState(generateRandomValues());

  useEffect(() =>{
     console.log('Rendering finished');
  })

  return (
    <>
      <button onClick={() => {setData(generateRandomValues());}}>
        Update Data
      </button>
      <Pie
        data={data}
        width={400}
        height={400}
        innerRadius={100}
        outerRadius={200}
        cornerRadius={15}
      />
    </>
  )
}

//<button onClick={() => dispatch(pieDataUpdateActionFunction())}>
