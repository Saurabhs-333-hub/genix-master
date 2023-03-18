import React from 'react'
import Card from 'react-bootstrap/Card';
import KeyImg from '../img/keyImg.png';
import FreeResourceImg from '../img/FreeResourceImg.png';
import CertificateImg from '../img/certificateImg.png';
import UserImgBlue from '../img/userBlue.png';
import BadgeImg from '../img/badge-check.png';
import BadgeDollarImg from '../img/badge-dollar.png';

const Features = () => {
  return (
    <div className='FeaturesContainer'>
      <div>
        <h2 className='FeaturesHeading'>
          Our Features and Services
        </h2>
      </div>

      <div className='FeaturesDesc1'>
        <p className='StandPara'>
        Our courses are designed to provide hands-on, practical experience, so you can apply what you learn in real-world scenarios
        </p>
      </div>
      <div className='FeaturesCardC'>
        <div className='Card'>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><div className='CardHeaderImg'>
            <img src={KeyImg} />
            </div>
            
            {/* <div>Easy Access</div> */}
            
            </Card.Header>
            <Card.Body>
              <Card.Title>Easy Access</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>




        <div className='Card'>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><div className='CardHeaderImg'>
            <img src={FreeResourceImg} />
            </div>
            
            {/* <div>Easy Access</div> */}
            
            </Card.Header>
            <Card.Body>
              <Card.Title>Easy Access</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>



        <div className='Card'>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><div className='CardHeaderImg'>
            <img src={CertificateImg} />
            </div>
            
            {/* <div>Easy Access</div> */}
            
            </Card.Header>
            <Card.Body>
              <Card.Title>Easy Access</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='FeaturesCardC'>
        <div className='Card'>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><div className='CardHeaderImg'>
            <img src={UserImgBlue} />
            </div>
            
            {/* <div>Easy Access</div> */}
            
            </Card.Header>
            <Card.Body>
              <Card.Title>Easy Access</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>



        <div className='Card'>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><div className='CardHeaderImg'>
            <img src={BadgeImg} />
            </div>
            
            {/* <div>Easy Access</div> */}
            
            </Card.Header>
            <Card.Body>
              <Card.Title>Easy Access</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='Card'>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><div className='CardHeaderImg'>
            <img src={BadgeDollarImg} />
            </div>
            
            {/* <div>Easy Access</div> */}
            
            </Card.Header>
            <Card.Body>
              <Card.Title>Easy Access</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>


  )
}

export default Features
