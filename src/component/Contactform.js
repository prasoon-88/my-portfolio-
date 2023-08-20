import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contactform = () => {
    const [page, setPage] = useState(1);
    const [yourName, setYourName] = useState('');
    const [yourEmail, setYourEmail] = useState('');
    const [yourMsg, setYourMsg] = useState('');
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
            }, { duration: 800, fill: "forwards" });
        });
        if (page === 2) {
            document.getElementById('submit').style.display = 'block';
        }
    }, 1);

    return (
        <div id='contactForm'>
            <div className="cross">
                <Link to={'/'}><i className="fa-solid fa-xmark" style={{ color: "ffffff" }}></i></Link>
            </div>
            <div id="outer"></div>
            <div id="inner"></div>
            <div className="formContainer">
            <form action='https://formspree.io/f/mqkvqapg' method='POST'>
                <div className='heading'><h1>Get in touch!</h1></div>
                <div className="formLayout">
                    <div className="contact3">Sending...</div>
                    <div className="contact2">Your Message : <input name="Message" type="text" placeholder='Hi! Prasoon' onInput={(e) => {
                        setYourMsg(e.target.value)
                    }} /></div>
                    <div className='contact1'>Hi, my name is <input name='username' type="text" placeholder='your name' className="name" onInput={(e) => {
                        setYourName(e.target.value)
                    }} /> and my email is <input placeholder='your email' type="email" name='email' onInput={(e) => {
                        setYourEmail(e.target.value)
                    }} />
                </div>
                </div>
                    <div className="contactButtonContainer">
                        <div>Step {page}/3 </div>
                            {(page !== 2) ?
                                <div className='next' onClick={() => {
                                    if ((yourName && yourEmail.includes('@gmail.com')) || yourMsg) {
                                        setPage(page + 1);
                                        document.getElementsByClassName('formLayout')[0].style.transform += `translate(${-200 + page * 100}vw,0)`;
                                    }
                                    if (page === 2) {
                                        document.getElementsByClassName('contactButtonContainer')[0].style.display = "none";
                                    }
                                }}>Next </div> : <button id='submit' type="submit">Send</button>
                            }
                        </div>

                </form>
            </div>
        </div>
    )
}

export default Contactform