import React, { useEffect, useState } from 'react'


const Navbar = () => {
    const [State,setState] = useState(0);
    const [Width,setWidth] = useState(window.innerWidth);
    const styleNavbar = {
        padding:"10px 20px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        position:"sticky",
        height:"50px"
    }
    setTimeout(() => {
        setWidth(window.innerWidth);
    }, 1000);
    useEffect(() => {
     if(Width < 600){
      document.getElementById('dropDownMenu').classList.add('dropdown');
    //   document.getElementById('dropDownMenu').classList.remove('navList');
        if(State == 0){
            document.getElementsByClassName('dropdown')[0].style = "opacity:0";
        }else{
            document.getElementsByClassName('dropdown')[0].style = "opacity:1";
        }
    }else{
      document.getElementById('dropDownMenu').classList.add('navList');
      document.getElementById('dropDownMenu').classList.remove('dropdown');
    }
    }, [State],[Width])
    
  return (
    <div id='top' style={styleNavbar}>
        <h1 className='navHeading' style={{fontFamily:"sans-serif"}}>
            <span className='navSpecial'>{`<`}</span>
            <span style={{color:"whitesmoke",fontSize:"35px"}}>PRAS00N</span>
            <span className='navSpecial'>{`/>`}</span>
        </h1>
        <div className='drop'>
                <li className='active' onClick={()=>{
                    setState((State+1)%2);
                }}><i className="fa-solid fa-bars" style={{color:'#416fbe'}}></i></li>
            <ul className='navList' id='dropDownMenu'>
                <a href="#top"><li>Start<span className='navSpecial'>{`/>`}</span></li></a>
                <a href='#Main2'><li>Projects<span className='navSpecial'>{`/>`}</span></li></a>
                <a href="#about"><li>Resume<span className='navSpecial'>{`/>`}</span></li></a>
                <a href="#contact"><li>Contact<span className='navSpecial'>{`/>`}</span></li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar