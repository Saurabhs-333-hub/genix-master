import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgCard from './123.png';
import Add from '../img/add.png';
import Popup from './Popup';
import { useState, useEffect } from 'react';
import { uuidv4 } from '@firebase/util';
import { collection, addDoc, updateDoc, getDoc, doc, query, getDocs, setDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth';
// import firebase from 'firebase/app'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebaseStorage';
import { toast, ToastContainer } from 'react-toastify';

import '../App.css'
import { Link } from 'react-router-dom';
export default function ProjectNAvAdmin() {
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [video, setVideo] = useState(null)
    const [pdf, setPdf] = useState(null)
    const [price, setPrice] = useState(null)
    const [details, setDetails] = useState([])
    const [userdetails, setUserDetails] = useState([])
    const db = getFirestore()
    let loading = false;
    let image1 = '';
    let pdf1 = '';
    let video1 = '';
    console.log(pdf1)
    const imageRef = ref(storage, `image/${'image' + uuidv4()}`)
    const videoRef = ref(storage, `video/${'video' + uuidv4()}`)
    const pdfRef = ref(storage, `pdf/${'pdf' + uuidv4()}`)
    let id = []
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
        let q1 = query(collection(db, 'users'))
        let querySnapshot1 = await getDocs(q1)
        data1 = querySnapshot1.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        console.log(data1)
        setUserDetails(data1)
    }
    // querySnapshot.then((res) => {
    //     console.log(res.forEach(querySnapshot => {
    //         id[`"${querySnapshot.id}"`]
    //         console.log(querySnapshot.id)
    //     }))
    // })
    const [ButtonPopup, SetButtonPopup] = useState(false);
    const updateProfile = async () => {
        loading = true;
        if (image == null) {
            return
        }

        await uploadBytes(pdfRef, pdf).then((res) => {
            try {


                getDownloadURL(res.ref).then((url) => {
                    pdf1 = url
                    console.log('pdf1', pdf1)
                    toast.success("Pdf Uploaded!!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                })
            } catch (error) {
                console.log(error)
            }

        })
        await uploadBytes(videoRef, video).then((res) => {
            try {


                getDownloadURL(res.ref).then((url) => {
                    video1 = url
                    console.log('video1', video1)

                })
                toast.success("Video Uploaded!!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            } catch (error) {
                console.log(error)
            }
        })
        await uploadBytes(imageRef, image).then((res) => {
            try {


                getDownloadURL(res.ref).then((url) => {
                    addDoc(collection(db, 'pdfs'), {
                        pdf: pdf1,
                        title: title,
                        desc: desc,
                        video: video1,
                        image: url,
                        price: price
                    })
                })
                toast.success("Image Uploaded!!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            } catch (error) {
                console.log(error)
            }
            console.log("Upload Complete");
            loading = false;
        })

        SetButtonPopup(false)
        window.location.reload()
    }
    const buyItem = async () => {
        await uploadBytes(imageRef, image).then((res) => {
            try {


                getDownloadURL(res.ref).then((url) => {
                    userdetails.map((value, id) => {
                        details.map((values, id) => {
                            updateDoc(doc(db, 'users', value.id), {

                                pdf: values.pdf,
                                title: values.title,
                                desc: values.desc,
                                video: values.video,
                                image: values.image,
                                price: values.price

                                // pdf: values.pdf,
                                // title: values.title,
                                // desc: values.desc,
                                // video: values.video,
                                // image: values.image,
                                // price: values.price


                            })
                            // updateDoc(doc(db, 'users', value.id), {
                            //     array: [
                            //         {

                            //             pdf: values.pdf,
                            //             title: values.title,
                            //             desc: values.desc,
                            //             video: values.video,
                            //             image: values.image,
                            //             price: values.price

                            //         }]
                            // })
                        })
                    })
                })
                toast.success("Image Uploaded!!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            } catch (error) {
                console.log(error)
            }
            console.log("Updated")
        })
    }

    return (
        <>
            <div className='ProjectListC'>
                <div className='CardSearch'>
                    <h2 className='CardHeading'>
                        Our Courses
                    </h2>

                    <div className='SearchC'>
                        <input type="text" className='CourseSearchBar' id="" />
                        <input type="button" className='CourseSearchBtn' value="Search" />
                        <button className='AddProjectBtn' onClick={() => SetButtonPopup(true)}><img className='Add' src={Add} />
                            <span style={{ color: "#fff" }}>Add Project</span></button>

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
                                    <div className='cardBlue'>
                                        <p className='CardRate'>{values.price}</p>
                                        <button className='CardButton' variant="primary" onClick={buyItem}>Buy Now</button>
                                    </div>
                                    <div >
                                        <Link to={values.video} className='linkdiv' key={id}>Watch Video</Link>
                                        <Link to={values.pdf} className='linkdiv' key={id}>View Pdf</Link></div>
                                </Card.Body>
                            </Card>
                        </div></div>
                    })}






                </div>
                <div className='CardButtonlightC'>
                    <button className='CardButtonlight'>Explore More</button>
                </div>



            </div>


            <Popup trigger={ButtonPopup}>

                <h3>Upload Project</h3>
                <form action="">
                    <div className="innerc">
                        <h5>Title</h5>
                        <input className='TitleInput' type="text" onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="innerc">
                        <h5>Description</h5>
                        <textarea className='DescriptionInput' name="" id="" cols="30" onChange={(e) => setDesc(e.target.value)} rows="10"></textarea>
                    </div>
                    <div className="innerc">
                        <h5>Video</h5>
                        <input className='FileInput' type="file" onChange={(e) => setVideo(e.target.files[0])} class="form-control" id="customFile" />
                    </div>
                    <div className="innerc">
                        <h5>Add Image</h5>
                        <input type="file" multiple={true} onChange={(e) => setImage(e.target.files[0])} class="form-control" id="customFile" />
                    </div>
                    <div className="innerc">
                        <h5>Add Pdf</h5>
                        <input type="file" multiple={true} onChange={(e) => setPdf(e.target.files[0])} class="form-control" id="customFile" />
                    </div>

                    <div className="innerc">
                        <h5>Price</h5>
                        <input className='TitleInput' type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>


                    <div className='BtnC'>
                        <button onClick={() => SetButtonPopup(false)} className='CancelBtn'>Cancel</button>
                        <input className='DoneBtn' type="button" value={loading ? "upload" : "Uploading"} onClick={updateProfile} />
                        <input className='DoneBtn' type="submit" value="Done" />
                    </div>
                </form>



            </Popup>


        </>


    )
}


