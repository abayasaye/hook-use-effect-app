import "./desk.css";
import React, { useEffect } from "react";
import { useState } from "react";

function Desk({number}) {
  const [legsNumber,setLegsNumber] = useState(number)
  const [tableColor,setTableColor]=useState("")
  useEffect(()=>{
    // alert("hello-legs-number")
  },[legsNumber])

  useEffect(()=>{
  setTableColor("white")
  },[])
  const LegsNumberUp = ()=>{
    setLegsNumber(legsNumber + number )
  }
  const LegsNumberDown = ()=>{
    setLegsNumber(legsNumber - number )
  }
  const LegsNumberReset = ()=>{
    setLegsNumber(legsNumber * number * 0)
  }
  const ChangeTableColor = ()=>{
    setTableColor("blue")
  }
  const colorFromInput = (event)=>{
    setTableColor(event.target.value)

  }
  const changeColorByInput = ()=>{
    setTableColor(tableColor)
  }
  return (
    <div className="desk">
      <h1>{legsNumber}</h1>
      <button onClick={LegsNumberUp}>LEGS-UP</button><br />
      <button onClick={LegsNumberDown}>LEGS-DOWN</button><br />
      <button onClick={LegsNumberReset}>LEGS-RESET</button><br />
      <h1>DESK-COMPONENT</h1>
      <hr />
      <h1>{tableColor}</h1>
      <button onClick={ChangeTableColor}>CHANGE-COLOR</button>
      <br />
      <input onChange={colorFromInput} type="text" placeholder="write color"></input><button onClick={changeColorByInput}>PRINT</button>
    </div>
  );
};

export default Desk;
