import { collection, getDocs, getFirestore, query } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [userdetails, setUserDetails] = useState([])
    let data
    const db = getFirestore()
    useEffect(() => {
        userData()
    }, [])
    const userData = async () => {
        let q = query(collection(db, 'users'))
        let querySnapshot = await getDocs(q)
        data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        console.log(data)
        setUserDetails(data)
    }
    return (
        <div>{localStorage.getItem('email')}
            <div>
                {userdetails.map((values, id) => {
                    return <div key={id} className='CardC'><div className='Card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={values.image} />
                            <Card.Body>
                                <Card.Title>{values.title}</Card.Title>
                                <Card.Text>
                                    {values.desc}
                                </Card.Text>
                                {/* <div className='cardBlue'>
                                    <p className='CardRate'>{values.price}</p>
                                    <button className='CardButton' variant="primary">Buy Now</button>
                                </div> */}
                                <div >
                                    <Link to={values.video} className='linkdiv' key={id}>Watch Video</Link>
                                    <Link to={values.pdf} className='linkdiv' key={id}>View Pdf</Link></div>
                            </Card.Body>
                        </Card>
                    </div></div>
                })}
            </div></div>
    )
}

export default Profile