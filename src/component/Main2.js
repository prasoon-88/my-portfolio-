import React, { useEffect } from 'react'
import { useState } from 'react';

const Main2 = () => {
 setTimeout(() => {
  const cards = document.querySelectorAll(".card");
  for(let i=0; i<cards.length; i++){
    cards[i].addEventListener('mousemove', rotate);
    cards[i].addEventListener('mouseleave', clearRotate);
  }
  
  function rotate(e){
    const cardItem = this.querySelector(".card-item");
    const force = 10;
    const offsetY = -(e.offsetY - cardItem.offsetHeight/4)/force;
    const offsetX = (e.offsetX - cardItem.offsetWidth/4)/force;
    cardItem.style.transform = 'rotateX(' + offsetY + 'deg) rotateY(' + offsetX + 'deg)';
  }
  
  function clearRotate(e){
    if(e.target.classList.contains("card")){
      const cardItem = this.querySelector(".card-item");
      cardItem.style.transform = 'rotateX(0) rotateY(0)';
    }
  }
 },);
 
  return (
    <div name='Main2' id='Main2'>
      
        <h1 className='webBg'>WEB</h1>
        <h1 className='codeBg'>CODE</h1> 
        <h1 className='designBg'>DESIGN</h1>
        <div className='workContainer'>
          <div className='workHead'>
            <h5>{`Work/>`}</h5>
            <h2>Selected web, mobile, video projects...</h2>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div id='project1' className='card-item'>
                <img src='images/resumeBg.png'/>
                <h1>Resume <br />Building <br />Web App</h1>
              </div>
            </div>
            <div className='card'>
              <div id='project2' className='card-item'>
                <img src='images/pizzaBg.png'/>
                <h1>Pizza <br />Ordering <br />Website</h1>
              </div>
            </div>
            <div className='card'>
              <div id='project3' className='card-item'>
                <img src='/images/amazonbg.png'/>
                <h1>Ecommerce-Clone <br />Amazon <br />Website</h1>
              </div>
            </div>
            <div className='card'>
              <div id='project4' className='card-item'>
                <img src='/images/spotifyBg.png'/>
                <h1>Spotify <br />Website <br />Clone App</h1>
              </div>
            </div>
          </div>
        </div>        
    </div>
  )
}

export default Main2