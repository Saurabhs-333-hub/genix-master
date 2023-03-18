import React from 'react'

import Description from '../Mycomponents/Description';
import CardContainer from '../Mycomponents/CardContainer';
import Description2 from '../Mycomponents/Description2';
import Features from '../Mycomponents/Features';
import BigFeatures from '../Mycomponents/BigFeatures';
import FreeFeatures from '../Mycomponents/FreeFeatures';
import HelpSec from './HelpSec';

const Home = () => {
  return (
    <div>
        <div className='mainContainer'>
    <div className='container1'>
      
      <Description />
      
    </div>
    <Description2/>       
    

    <CardContainer/>

    <Features/>

    <BigFeatures/>
    <FreeFeatures/>
    <HelpSec/>
    
  </div>
  </div>
  )
}

export default Home