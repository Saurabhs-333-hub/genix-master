import React from 'react';
import IndivProjectImg from '../img/FaceRecognition.png'
import Button from 'react-bootstrap/Button';
import VideoImg from '../img/VideoLecture.png';
import { Link } from 'react-router-dom';
import HelpSec from './HelpSec';

const IndivProject = () => {
    return (
        <div>
            <div className='container1'>

                <div className='secLanding'>


                    <div className='DescT'>
                        <div>
                            <h1 className='title1'>Make <span style={{ color: "#0085FF" }} >Projects</span> that defines the world</h1>
                        </div>
                        <div>
                            <p className='para1'>Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit interdum mi felis laoreet sagittis.</p></div>
                        <div>
                        <Link to='/signup'><button className='bt2'>Register Now</button></Link>
                        </div>
                    </div>
                    <img className='IndivProjectImg' src={IndivProjectImg} />
                </div>

            </div>

            <div className='ProjectDesc'>
                <div className='CourseText'>
                    <h4>What Will You Learn ?</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus magnam architecto modi officiis, vitae illo veniam id repudiandae, in aut enim labore repellendus sint, quo odio beatae dolores. Tempora, similique.</p>
                </div>
                <div className='CourseDetails'>
                    <h4>Course Details</h4>
                    <p> Prerequisites </p>
                    <p>Time Required</p>
                    <p>Difficulty Level</p>

                </div>
            </div>
            <div className='BreakContainer'>
                <div className='BreakHeader'>
                    <h4>
                        Everything that will help you in your learning
                    </h4>
                </div>
            </div>

            <div className='advantages'>

                <div className='advantagestext'>
                    <div>
                        <h4>Video Lecture</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nam asperiores sint tenetur minus nemo dicta vel, adipisci maxime debitis accusamus repellat nobis </p>
                    </div>
                    <div>
                        <img className='' src={VideoImg} />
                    </div>
                </div>
                <div className='advantagestext'>
                    <div>
                        <h4>Video Lecture</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nam asperiores sint tenetur minus nemo dicta vel, adipisci maxime</p>
                    </div>
                    <div>
                        <img className='' src={VideoImg} />
                    </div>
                </div>
            </div>
            <div className='advantages'>

                <div className='advantagestext'>
                    <div>
                        <h4>Video Lecture</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nam asperiores sint tenetur minus nemo dicta vel, adipisci maxime debitis accusamus repellat nobis </p>
                    </div>
                    <div>
                        <img className='' src={VideoImg} />
                    </div>
                </div>
                <div className='advantagestext'>
                    <div>
                        <h4>Video Lecture</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nam asperiores sint tenetur minus nemo dicta vel, adipisci maxime</p>
                    </div>
                    <div>
                        <img className='' src={VideoImg} />
                    </div>
                </div>
            </div>


            <div className='advantages2'>
                    <p>
            Our projects are designed to be flexible, so you can study at your own pace and on your own schedule. Whether you have a busy work schedule or just prefer to learn in the evenings, our courses are accessible whenever and wherever you need them.
            </p>
            <div >
                So Why Wait?
            </div>

            <Link to='/signup'><button className='bt2'>Register Now</button></Link>

            </div>


            <HelpSec/>



        </div>



    )
}

export default IndivProject