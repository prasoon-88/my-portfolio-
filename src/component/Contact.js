import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {

  return (
    <div id='contact'>
        <h1>{`Contact/>`}</h1>
        <div className='contactContainer'>
            <h1>Find Me On:</h1>
            <div className="container">

                <div className="socialContainer">
                    <h3><a target='_blank' href="https://www.linkedin.com/in/prasoon-asati-01a843196/"><i className="fa-brands fa-linkedin fa-xl" style={{color:"#1493c5"}}></i> Linkdin</a></h3>
                </div>
                <div className="socialContainer">
                    <h3><a target='_blank' href="https://github.com/prasoon-88/"><i className="fa-brands fa-github fa-xl" style={{color:"#1493c5"}}></i> GitHub</a></h3>
                </div>
                <div className="socialContainer">
                    <h3><a target='_blank' href="https://wa.me/919424415952?text=Hi!%20%0APrasoon"><i className="fa-brands fa-whatsapp fa-xl" style={{color:"#1493c5"}}></i> Whatsapp</a></h3>
                </div>
                <div className="socialContainer">
                    <h3><a target='_blank' href="https://www.youtube.com/channel/UCZdqampNwgSMEFxLnVW9-LQ"><i className="fa-brands fa-youtube fa-xl" style={{color:"#1493c5"}}></i> Youtube</a></h3>
                </div>
                <div className="socialContainer">
                    <h3><a target='_blank' href="tel:+919424415952"><i className="fa-solid fa-phone" style={{color:"#1493c5"}}></i> Phone</a></h3>
                </div>
                <div className="socialContainer">
                    <h3><a target='_blank' href="mailto:prasouna@gmail.com"><i className="fa-solid fa-envelope" style={{color:"#1493c5"}}></i> Email</a></h3>
                </div>
            </div>
        </div>
        <Link to={'/contactform'}><button onClick={()=>{
            console.log("Hello I Clicked")
        }} className='getInTouch'>Get in  Touch</button></Link>
        <div className="copyright">© Made with {`</>`} by Prasoon. India 2023.</div>
        <a href="#top"><h2 id='backToTop'>Top</h2></a>
    </div>
  )
}

export default Contact