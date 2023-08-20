import React from 'react'
import Navbar from "./Navbar";
import Main1 from './Main1';
import Main2 from './Main2';
import About from './About'
import Contact from './Contact';

const Home = () => {
    setTimeout(() => {
        const inner = document.getElementById("inner");
        const outer = document.getElementById("outer");
        
        document.addEventListener("mousemove", (e) => {
          let left = e.pageX;
          let top = e.pageY;
          
          inner.style.left = (left - 4) + "px";
          inner.style.top = (top - 4) + "px";
          
          outer.animate({
            left: (left - 15) + "px",
            top: (top - 15) + "px",
          }, {duration:800, fill: "forwards"});
        });
          },1);
  return (
    <div>
        <div id="outer"></div>
    <div id="inner"></div>  
      <Navbar/>
      <div className='strip'>
        <div className="scrollbar"><div className="dass"></div></div>
        <h5>SCROLL</h5>
      </div>
      <Main1/>
      <Main2/>
      <About/>
      <Contact/>

    </div>
  )
}

export default Home