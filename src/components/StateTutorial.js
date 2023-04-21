import React, { useState } from 'react'

export const StateTutorial = () => {

const[inputValue,newChangeValue]=useState("Digambar")

const onChange=(event)=>{
    const newVal=event.target.value
    newChangeValue(newVal)
}



  return (
    <div>
        <h1>{inputValue} </h1>
        <input type='text' value={inputValue} Placeholder='type something....' onChange={onChange}></input>
    </div>
  )
}

