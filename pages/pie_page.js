import React from 'react'
//import { useDispatch } from 'react-redux'
//import { pieDataUpdateAction } from '../lib/redux/pieData/pieActions'
//import { usePieData } from '../lib/redux/pieData/usePieData'
import Pie from '../components/pie'
import {generateRandomValues} from '../lib/randomDataGenerator'


export default function pie_page() {
  //const dispatch = useDispatch();
  //const pieDataValues = usePieData()
  //const pieDataUpdateActionFunction = pieDataUpdateAction

  var pieDataValues = generateRandomValues()

  return (
    <>
      <button onClick={() => {pieDataValues = generateRandomValues()}}>
        Update Data
      </button>
      <Pie
        data={pieDataValues}
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
