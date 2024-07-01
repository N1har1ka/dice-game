import React, { useEffect, useState } from 'react'
import './Box.css'

export default function Box(props) {
    const [selectedNumber,setSelectedNumber]=useState(null);
    const show = () => {
        console.log("Button clicked. Value to set:", props.value);
        setSelectedNumber(props.value);
        console.log("Selected Number State:", selectedNumber);
    };
    // useEffect(() => {
    //     console.log("Box component rendered with value:", props.value);
    // }, [props.value]);
    let isSelected=props.value==selectedNumber;
    console.log(isSelected);
  return (
    <div>
      <button className={isSelected?"boxbtnlight":"boxbtndark"} onClick={show} >{props.value}</button>
    </div>
  )
}


