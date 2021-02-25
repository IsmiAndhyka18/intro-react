import React, { useState } from 'react';
import {render} from "react-dom";
import Calendar from 'react-calendar';



const ReactCalender = () => {
    const [date,setDate] = useState(newDate());

    const onChange = date => {
        setDate(date)
    }

    return (
        <div>
        <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
    )
}

render (<ReactCalender/> ,document.querySelector("#root"));