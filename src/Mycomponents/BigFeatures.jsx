import React from 'react'
import Featureimg1 from '../img/feature1.png'
import Featureimg2 from '../img/feature2.png'

const BigFeatures = () => {
    return (
        <div className='BigFeatures'>
            <div className='BigFeatureC'>


                <div className='BigFeatureImgC1'>
                    <img className='BigFeatureImg1' src={Featureimg1} />
                </div>



                <div className='BigFeatureDesc' >
                    <div>
                        <h2 className='FeaturesHeading'>
                        Industry Standard Projects
                        </h2>
                    </div>

                    <div className='FeaturesDesc'>
                        <p className='StandPara'>
                        Our courses are designed to provide hands-on, practical experience, so you can apply what you learn in real-world scenarios. Our courses are designed to be flexible, so you can study at your own pace and on your own schedule. Whether you have a busy work schedule or just prefer to learn in the evenings, our courses are accessible whenever and wherever you need them.
                        </p>
                    </div>
                </div>
            </div>

            <div className='BigFeatureC'>


                <div className='BigFeatureDesc' >
                    <div>
                        <h2 className='FeaturesHeading'>
                        24/7 Students Support
                        </h2>
                    </div>

                    <div className='FeaturesDesc'>
                        <p className='StandPara'>
                        Our expert instructors have years of experience in the industry and will guide you every step of the way.So why wait? Start your journey to becoming a machine learning expert today!
                        </p>
                    </div>
                </div>

                <div className='BigFeatureImgC2'>
                    <img className='BigFeatureImg2' src={Featureimg2} />
                </div>
            </div>

        </div>
    )
}

export default BigFeatures
