import React, { useEffect, useState } from 'react'
import './Gameplay.css'
import img from '../images/dice_1.png'


export default function Gameplay() {
    const arrNumber=[1,2,3,4,5,6];
    const [selectedNumber,setSelectedNumber]=useState(null);
    const show = (value) => {
        console.log("Button clicked. Value to set:",value);
        setSelectedNumber(value);
    };
    useEffect(() => {
      console.log("Selected Number State:", selectedNumber);
  }, [selectedNumber]);

  // useEffect(() => {
  //     console.log("effect");
  // }, []);
  return (
    <div>
     <div className='gamediv1'>
      <div>
      <h1 className='gamediv1h1'>0</h1> 
      <p className='gamediv1p1'>Total Score</p>
      </div>
      <div >
        <div className='gamedivbtn'>
        {
          // className={`value===selectedNumber?"boxbtndark":"boxbtnlight"`}
        arrNumber.map((value,i)=>( 
            <button key={i} className={`boxbtn${value === selectedNumber ? 'dark' : 'light'}`} onClick={()=>show(value)} >{value}</button>
        ))
        }
        </div>
        <div>
            <p className='gamediv1p2'>Select Number</p>
        </div>
      </div>
     </div>
     <div className='gamediv2'>
        <img src={img} alt="" />
        <p className='gamediv2p'>Click on Dice to roll</p>
        <button className='gamefooterbtn1'>Reset Score</button>
        <button className='gamefooterbtn2'>Show Rules</button>
     </div>
    </div>
  )
}
