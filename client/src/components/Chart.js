import React from 'react';
import {Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';

export default props => {

    return (
        <div className="box">
            <Sparklines className="spark" data={props.data} >
                <SparklinesLine color={props.color} style={{fill: "none"}}/>
                <SparklinesBars style={{stroke: "white", fill: "#41c3f9", fillOpacity: ".25"}}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>Average: {props.average}</div>
        </div>
    )
}
