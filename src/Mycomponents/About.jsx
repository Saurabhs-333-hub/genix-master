import React from 'react';
import Button from 'react-bootstrap/Button';
import Imagediv from '../img/Saly-10.png';
import '../App.css'
import DescriptionBox from './DescriptionBox';

const About = () => {
  return (
    <div>
      <div className='container1'>

        <div className='AboutLanding'>


          <div className='AboutDescT'>
            <div>
            <h1 className='title1'>About <span style={{ color: "#0085FF" }} >Learning Era</span></h1>
            </div>
            <div>
            <p className='para2'>Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit interdum mi felis laoreet sagittis.Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit interdum mi felis laoreet sagittis.</p>
            </div>
          </div>

        </div>

      </div>
      <DescriptionBox />
    </div>
  )
}

export default About