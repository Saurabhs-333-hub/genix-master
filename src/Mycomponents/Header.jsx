import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import SignupImg from '../img/user.png';
import { getAuth, signOut } from 'firebase/auth';
import { app } from './firebaseConfig'
const auth = getAuth(app);
export default function Header() {
  let user = localStorage.getItem('email')
  const handleSignOut = () => {
    signOut(auth).then((res) => {
      console.log(res)
      { localStorage.removeItem('email') }
      // setData("No User")
      window.location.assign('/register')
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div>
      <Navbar className='navbar' variant="dark">
        <Container>
          <Navbar.Brand className='learningGennix'><Link style={{ color: "white" }} to='/'><span style={{ color: "#0085FF" }} >//</span>Learning Genix</Link></Navbar.Brand>

          <div className='navlinks'>

            <Nav className="me-auto">
              <Nav.Link className='navLink' ><Link style={{ color: "white" }} to='/projects'>Project</Link></Nav.Link >
              <Nav.Link className='navLink' >
                <Link style={{ color: "white" }} to='/indivproject'>IndivProject</Link>
              </Nav.Link >


              {user == 'sonisaurabhsoni333@gmail.com' ? <Nav.Link className='navLink'><Link style={{ color: "white" }} to='/adminproject'>Admin</Link></Nav.Link > : <div></div>}

              <Nav.Link className='navLink'>
                <Link style={{ color: "white" }} to='/resources'>Resources</Link>
              </Nav.Link >

              <Nav.Link className='navLink'>
                <Link style={{ color: "white" }} to='/about'>AboutUs</Link>
              </Nav.Link >
              <Nav.Link className='navLink'>
                <Link style={{ color: "white" }} to='/profile'>Profile</Link>
              </Nav.Link >


              {user ? <Nav.Link className='navLink' onClick={handleSignOut}> <Link style={{ color: "white" }} to='/signup'><div className="signup">


                <img src={SignupImg} alt="" />
                <span style={{ color: "#ffff" }}>Logout</span>
              </div>
              </Link></Nav.Link> : <Nav.Link className='navLink'> <Link style={{ color: "white" }} to='/signup'>
                <div className="signup">
                  <img src={SignupImg} alt="" />
                  <span style={{ color: "#fff" }}>Sign up</span>
                </div></Link></Nav.Link>}
            </Nav>
          </div>

        </Container>
      </Navbar>
    </div>
  )
}
