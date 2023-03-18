import React from 'react'
import Button from 'react-bootstrap/Button';
import Imagediv from '../img/Saly-10.png';
import { Link } from 'react-router-dom';
import '../App.css'
export default function Description() {
    return (
        <div className='secLanding'>


            <div className='DescT'>
                <div>
                    <h1 className='title1'>Make <span style={{ color: "#0085FF" }} >Projects</span> that defines the world</h1>
                </div>
                <div>
                    <p className='para1'>Hands on practical projects that will help you develop the skills you need to succeed in the field.</p></div>
                <div>
                    <Link to='/projects'><button className='bt2'>Explore Projects</button></Link>
                    <Link to='/about'><button className='bt3'>Learn More</button></Link>
                </div>
            </div>



            <img className='img1' src={Imagediv} />


        </div>



    )
}
