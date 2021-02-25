import Clock from 'react-live-clock';
import React from "react";

function Time() {
   
    return (
        <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'EUROPE/brussels'} />
        </div>
    )
}

export default Time
