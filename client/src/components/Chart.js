import React from 'react'
import {
  Sparklines, SparklinesLine, SparklinesBars,
  SparklinesReferenceLine, SparklinesSpots
} from 'react-sparklines'

export default ({data, color, average}) => (
  <div className="spark">
    <Sparklines svgHeight={120} svgWidth={180} data={data}>
      <SparklinesLine color={color} style={{fill: 'none'}}/>
      <SparklinesBars style={{stroke: 'white', fill: 'black', fillOpacity: '.25'}}/>
      <SparklinesReferenceLine type="avg"/>
      <SparklinesSpots />
    </Sparklines>
    <div className="averageText">Average: {average}</div>
  </div>
)

