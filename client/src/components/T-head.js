import React from 'react';

const Thead = () => {

    return (
        <tr className="rowFont">
            <th className="animated slideInLeft city">City</th>
            <th className="animated slideInLeft">Temperature (°)</th>
            <th className="animated slideInRight">Pressure (mBar)</th>
            <th className="animated slideInRight">Humidity (%)</th>
            <th></th>
        </tr>
    )
}

export default Thead;
