import React from 'react'

const About = () => {
  return (
    
    <div id='about'>
        <h1 className='aboutHed'>{`About/>`}</h1>
        <div className="resume">

          <span className="violet">class </span><span className='yellow'>Prasoon Asati </span>{`{`}
          <span className="space"></span><div className="comment">··// I can, because I did.</div>
          <span className="space"></span><div className="comment">··// My vast variety of skills is continuously expanding.</div><br />

          <span className="violet">constructor</span>{`() { `} <br />
          <span className="space"></span><span className="red">this</span>{`.`} <span className="green">name</span> = <span className="green">'Prasoon Asati'</span><br />
          <span className="space"></span><span className="red">this</span>{`.`} <span className="green">dateOfBirthTimestamp</span> = <span className="green">291112003</span><br />
          <span className="space"></span><span className="red">this</span>{`.`} <span className="green">email</span> = <span className="green"> 'prasouna@gmail.com'</span><br />{`}`} <br /><br />

          <span className="yellow">workExperience</span>{`() { `} <br />
          <span className="violet">return </span> {`[`} <br />
          <span className="space"></span>{`{ `} <span className="green">'2023-now'</span> : <span className="green">'Web Developerat CodeAlpha'</span>{`} `} <br />
          <span className="space"></span>{`{ `} <span className="green">'2023-now'</span> : <span className="green">'Campus Executive'</span>{`} `} <br />
          <span className="space2"></span>{`]`}<br />{`}`} <br /><br />

          <span className="yellow">education</span>{`() { `} <br />
          <span className="violet">return </span> {`[`} <br />
          <span className="space"></span>{`{ `} <span className="green">'2018-2019'</span> : <span className="green">'Govt Model H S School Khurai - High School (X) '</span>{`} `} <br />
          <span className="space"></span>{`{ `} <span className="green">'2020-2021'</span> : <span className="green">'Takshshila H S School Khurai - Higher Secondary (XII) '</span>{`} `} <br />
          <span className="space"></span>{`{ `} <span className="green">'2021-NOW'</span> : <span className="green">'Gyan Sagar College Of Engineering Sagar - B.TECH. (CSE) '</span>{`} `} <br />
          <span className="space2"></span>{`]`} <br />{`}`}<br /><br />

          <span className="yellow">skill</span>{`() { `} <br />
          <span className="violet">return </span> {`[`} <br />
          <span className="space"></span><span className="green">'HTML' , 'CSS' , 'JAVA SCRIPT' , 'REACT.JS' , 'C++' , 'DATA STRUCTURE' , 'JAVA' , 'BOOTSTRAP' , 'TAILWIND CSS' , 'REDUX' , 'C' , 'NODE.JS' <br /> </span>
          <span className="space2"></span>{`]`} <br />{`}`} <br />{`}`}

        </div>
    </div>
  )
}

export default About