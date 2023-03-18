import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import { useState, useEffect } from 'react'
//import axios from 'axios'
import dm1 from '../img/FaceRecognition.png'
import { toast, ToastContainer } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
const auth = getAuth();
const Login = ({ setloginuser }) => {
    localStorage.setItem('user', null)
    const navigate = useNavigate();

    const [user, setuser] = useState({
        email: "",
        password: ""
    })

    const [loginErr, setErr] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target
        setuser({
            ...user,
            [name]: value
        })
    }
    const handleSignin = async () => {
        await signInWithEmailAndPassword(auth, user.email, user.password).then((res) => {
            console.log(res.user)

            // setData(res.user.email)
            auth.currentUser.emailVerified === true ? window.location.assign('/profile') : toast.error("Email Not Verified!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })



        }, localStorage.setItem('email', auth.currentUser.email),
        ).catch((err) => {
            console.log(err)
        })
    }
    const login = (e) => {
        // axios.post("http://localhost:3001/login",user).then(res=>{
        // alert(res.data.message)
        // setloginuser(res.data.user);
        //     navigate("/");

        // }
        e.preventDefault();
        setErr(Validate(user));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(loginErr);
        if (Object.keys(loginErr).length === 0 && isSubmit) {
            console.log(user.email)
        }
    }, [loginErr])
    const Validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "**email required!!**";
        }
        else if (!regex.test(values.email)) {
            errors.email = "**Please enter valid email address**"
        }

        if (!values.password) {
            errors.password = "**password field required!!**";
        }
        else if (values.password.length < 6) {
            errors.password = "**Password must be more than 6 characters**"
        }


        return errors
    }
    return (
        <>
            <div className='main'>
                <div className='login'>

                    <h1>Login</h1>

                    <input type="email" name="email" value={user.email} placeholder='Email' onChange={handleChange}></input>
                    <br />
                    <span>{loginErr.email}</span>
                    <br />
                    <input type="password" name="password" value={user.password} placeholder='Password' onChange={handleChange}></input>
                    <br />
                    <span>{loginErr.password}</span>


                    <div>
                        <button className='btn' onClick={handleSignin}>Login</button>
                    </div>
                    <div>or</div>
                    <div>
                        <Link to="/register">
                            <button className='btn'>Register</button>
                        </Link>

                    </div>
                </div>

                <div>
                    {/* <img src={dm1} /> */}
                </div>
            </div>
            <h4>Please Verify Your Email First, Then Try To Login!</h4>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </>
    )
}

export default Login