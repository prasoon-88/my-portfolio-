import React, { useState } from 'react'

const Main1 = () => {
  const [develop,setDevelop] = useState('Web Apps');
  const skill = ['Web Apps','things','Programs','Logics','Softwares']
  const [index,setIndex] = useState(0)
  setTimeout(() => {
    setDevelop(skill[(index)%5]);
    setIndex((index+1))
  }, 1500);
  return (
    <div id='Main1'>
      <img id='bee' src="images/bee.png" alt="" />
        <p>{`Start/>`}</p>
        <h1>Hi, my name is <span id='name'>Prasoon Asati </span><br />i <i>design</i> and develop 
            <span> {develop}</span>
        </h1>
        <h3>Let me show You...</h3>
    </div>
  )
}

export default Main1