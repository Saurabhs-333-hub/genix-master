import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgCard from './123.png';
import '../App.css'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
export default function ProjectNAv() {
    const [details, setDetails] = useState([])
    const db = getFirestore()
    const auth = getAuth()
    let data
    let data1
    useEffect(() => {
        userData()
    }, [])
    const userData = async () => {
        let q = query(collection(db, 'pdfs'))
        let querySnapshot = await getDocs(q)
        data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        console.log(data)
        setDetails(data)
    }
    const buyItem = () => {

    }
    return (
        <>
            <div className='ProjectListC'>
                <div className='CardSearch'>
                    <h2 className='CardHeading'>
                        Our Courses
                    </h2>

                    <div className='SearchC'>
                        <input type="text" className='CourseSearchBar2' id="" />
                        <button type='submit' className='CourseSearchBtn'>Search</button>
                    </div>
                </div>
                <div className='CardC'>







                    {details.map((values, id) => {
                        return <div key={id} className='CardC'><div className='Card'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={values.image} />
                                <Card.Body>
                                    <Card.Title>{values.title}</Card.Title>
                                    <Card.Text>
                                        {values.desc}
                                    </Card.Text>
                                    {auth.currentUser != null ? <div>   <div className='cardBlue'>
                                        <p className='CardRate'>{values.price}</p>
                                        <button className='CardButton' variant="primary" onClick={buyItem}>Buy Now</button>
                                    </div>
                                        <div >
                                            <Link to={values.video} className='linkdiv' key={id}>Watch Video</Link>
                                            <Link to={values.pdf} className='linkdiv' key={id}>View Pdf</Link></div></div> : <div><Link to={'/signup'}> <button className='CardButton' variant="primary" >Buy Now</button > </Link> </div>}


                                </Card.Body>
                            </Card>
                        </div></div>
                    })}




                </div>
                <div className='CardButtonlightC'>
                    <button className='CardButtonlight'>Explore More</button>
                </div>
            </div>



        </>


    )
}
