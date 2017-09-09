import React from 'react';
import {Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine, SparklinesSpots} from 'react-sparklines';

export default props => {
    return (
        <div className="spark">
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
                <SparklinesLine color={props.color} style={{fill: "none"}}/>
                <SparklinesBars style={{stroke: "white", fill: "black", fillOpacity: ".25"}}/>
                <SparklinesReferenceLine type="avg"/>
                <SparklinesSpots />
            </Sparklines>
            <div className="averageText">Average: {props.average}</div>
        </div>
    )
}
