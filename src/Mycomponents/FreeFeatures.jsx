import React from 'react';
import Card from 'react-bootstrap/Card';
import ImgCard from './123.png';
import FreeFeatureImg from '../img/FreeFeatureImg.png';
import ResourcesImg from '../img/resources.png';
import GridImg from '../img/grid.png'
// import Card from 'react-bootstrap/Card';
import ArrowImg from '../img/arrow-right.png'
import { Link } from 'react-router-dom';


const FreeFeatures = () => {
    return (
        <div>
            <div className='FeaturesContainer'>
                <div>
                    <h2 className='FeaturesHeading'>
                    Check out our free Resources
                    </h2>
                </div>
                <div className='CardC'>

                    <div className='Card'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ResourcesImg} />
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><div className='Subtitle'><div><img className='GridImg' src={GridImg} alt="" /></div><div> Web Development</div></div></Card.Subtitle>
                            <Card.Title><div className='ResourceTitleP'>
                            Google Flutter from Scratch
                            </div>  </Card.Title>
                            
                            <div className='ResourceCardSection'>
                                <p className='Date'>DATE</p>
                                <div className='readmore'>
                            <Link style={{ color: "#0085FF" }} to='/resources'>
                                      <p>Read More </p>
                                      </Link>
                                    <img src={ArrowImg} alt="" />
                            
                                </div>
                                
                            </div>
                        </Card.Body>
                    </Card>
                    </div>

                    <div className='Card'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ResourcesImg} />
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><div className='Subtitle'><div><img className='GridImg' src={GridImg} alt="" /></div><div> Web Development</div></div></Card.Subtitle>
                            <Card.Title><div className='ResourceTitleP'>
                            Google Flutter from Scratch
                            </div>  </Card.Title>
                            
                            <div className='ResourceCardSection'>
                                <p className='Date'>DATE</p>
                                <div className='readmore'>
                            <Link style={{ color: "#0085FF" }} to='/resources'>
                                      <p>Read More </p>
                                      </Link>
                                    <img src={ArrowImg} alt="" />
                            
                                </div>
                                
                            </div>
                        </Card.Body>
                    </Card>
                    </div>

                    <div className='Card'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ResourcesImg} />
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><div className='Subtitle'><div><img className='GridImg' src={GridImg} alt="" /></div><div> Web Development</div></div></Card.Subtitle>
                            <Card.Title><div className='ResourceTitleP'>
                            Google Flutter from Scratch
                            </div>  </Card.Title>
                            
                            <div className='ResourceCardSection'>
                                <p className='Date'>DATE</p>
                                <div className='readmore'>
                            <Link style={{ color: "#0085FF" }} to='/resources'>
                                      <p>Read More </p>
                                      </Link>
                                    <img src={ArrowImg} alt="" />
                            
                                </div>
                                
                            </div>
                        </Card.Body>
                    </Card>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FreeFeatures
