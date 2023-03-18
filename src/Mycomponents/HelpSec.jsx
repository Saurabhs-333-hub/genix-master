import React from 'react'
import HelpImg1 from '../img/helpimg1.png'
const HelpSec = () => {
  return (
    <div className='HelpSection'><div>
    <div className='BigFeatureC'>


        <div className='BigFeatureImgC1'>
            <img className='BigFeatureImg1' src={HelpImg1} />
        </div>



        <div className='BigFeatureDesc' >
            <div>
                <h2 style={{ color: "#0085FF" }} className='FeaturesHeading'>
                Need Help? Reach out to us
                </h2>
            </div>

            <div className='FeaturesDesc'>
                <p className='StandPara'>
                Come on, if you need any assistance or want any clarification let’s connect and resolve it. We are here with you at every step of your journey.
                </p>
            </div>
            <div className='HelpBtnC'>
                <button className='HelpBtn' >Contact US</button>
                <button className='HelpBtnl'>FAQs</button>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default HelpSec