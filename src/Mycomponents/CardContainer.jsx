import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgCard from './123.png';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Image from 'react-bootstrap/Image'

export default function CardContainer() {
    return (
        <div>
            <h2 className='CardHeading'>
                Our Courses
            </h2>
            <div className='CardC'>

                <div className='Card'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ImgCard} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='cardBlue'>
                                <p className='CardRate'>RS 1500</p>
                                <button className='CardButton' variant="primary">Buy Now</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className='Card'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ImgCard} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='cardBlue'>
                                <p className='CardRate'>RS 1500</p>
                                <button className='CardButton' variant="primary">Buy Now</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className='Card'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ImgCard} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='cardBlue'>
                                <p className='CardRate'>RS 1500</p>
                                < button className='CardButton' variant="primary">Buy Now</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>


                

            </div>
            <div className='CardButtonlightC'>
                <button className='CardButtonlight'>Explore More</button>
            </div>
        </div>
    )
}
