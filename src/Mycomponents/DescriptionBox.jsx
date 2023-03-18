import React from 'react'
import HelpSec from './HelpSec';
import StoryImg from '../img/OurStory.png';
import ApproachImg from '../img/OurApproach.png';
import TeamImg from '../img/OurTeam.png';
import HelpImg1 from '../img/helpimg1.png'

const DescriptionBox = () => {
  return (
    <div className='DescC'>


      <div className='DescBox'>
        <div className='DescText'>
          <h1 className='DescBoxHead'>
            Our Story
          </h1>
          <p className='DescBoxPara'>
            Our education platform was founded by a team of engineers with a <span style={{ color: "#0085FF" }} >Passion</span> for teaching. We saw a need for a more <span style={{ color: "#0085FF" }} >hands-on approach</span> to engineering education and set out to create a <span style={{ color: "#0085FF" }} >platform</span> that would make that possible. Since then, we've grown into a community of students, educators, and engineers, all united by our shared <span style={{ color: "#0085FF" }} >love of engineering</span> and desire to <span style={{ color: "#0085FF" }} >make a difference</span>.
          </p>
        </div>

        <div>
        <img className='StoryImg' src={StoryImg}/>
        </div>
      </div>
{/* --------------------------------------------------------------------------------- */}
      <div className='DescBox'>
        
        <div>
        <img className='ApproachImg' src={ApproachImg}/>
        </div>
        
        <div className='DescText'>
          <h1 className='DescBoxHead'>
            Our Approach
          </h1>
          <p className='DescBoxPara'>
          Our approach to engineering education is centered around <span style={{ color: "#0085FF" }} >hands-on projects</span>. We are aiming to provide a wide range of projects, covering everything from basic electronics to advanced robotics. We have started with <span style={{ color: "#0085FF" }} >machine learning</span>, each project is designed to be both <span style={{ color: "#0085FF" }} >fun</span> and <span style={{ color: "#0085FF" }} >educational</span>, allowing students to learn by doing and develop the skills they need to succeed in the field of engineering.
          </p>
        </div>

        
      </div>


      {/* =========================================================== */}
      <div className='DescBox'>
        <div className='DescText'>
          <h1 className='DescBoxHead'>
            Our Team
          </h1>
          <p className='DescBoxPara'>
          Our team is made up of experienced engineers and educators, all with a <span style={{ color: "#0085FF" }} >passion</span>passion for <span style={{ color: "#0085FF" }} >teaching</span> and a commitment to making engineering education <span style={{ color: "#0085FF" }} >accessible</span> to everyone. Whether you're a student <span style={{ color: "#0085FF" }} >just starting out</span>, or an <span style={{ color: "#0085FF" }} >experienced engineer</span> looking to improve your skills, our team is here to help you <span style={{ color: "#0085FF" }} >succeed</span>.
          </p>
        </div>

        <div>
        <img className='StoryImg' src={TeamImg}/>
        </div>
      </div>


      <HelpSec/>
    </div>
  )
}

export default DescriptionBox