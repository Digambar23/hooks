import React, { useEffect, useState } from 'react'

export const StateTutorial = () => {

const[inputValue,newChangeValue]=useState("Bhai")

useEffect(()=>{
  setTimeout(()=>{
    newChangeValue((inputValue)=>inputValue+1);
  },[1000])
});

const onChange=(event)=>{
    const newVal=event.target.value
    newChangeValue(newVal)
}



  return (
    <div>
        <h1>{inputValue} </h1>
        <input type='text' value={inputValue} placeholder='type something....' onChange={onChange}></input>
    </div>
  )
}

