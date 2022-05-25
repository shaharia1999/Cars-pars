import React from 'react';
import './Navber.css';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath,useNavigate, } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navber = () => {
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div >
        <Link
          style={{ color: match ? "#f43530" : "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
     
      </div>
    );
  }
  const [user, loading, error] = useAuthState(auth);
  const navigate=useNavigate();
  const singout=()=>{
    signOut(auth).than(()=>{
      navigate('/login')

    })
    .catch((error) => {
      // An error happened.
    });

   }
 
  return (
    <div className='header'>
    <Navbar bg="dark" expand="lg">
<Container fluid>
<h1 ><Link className='text-white text-decoration-none' to="/"><span className='text-danger text-4xl'>W</span>olge<span className='text-danger'>h</span>Car</Link></h1> 
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav
className="me-auto my-2 my-lg-0"
style={{ maxHeight: '100px' }}
navbarScroll
>

</Nav>
<div className='navber-item'>
    <li><CustomLink to='/'>Home</CustomLink></li>
    <li><CustomLink to='/blog'>Blog</CustomLink></li>
    {
      user?.uid? <li><CustomLink to='/manageItem'>Manage Items</CustomLink></li> :
      <></>

    }{
      user?.uid?<li><CustomLink to='/dashBord'>Dash bord</CustomLink></li> :
      <></>

    }
    {
      user?.uid?<li><CustomLink to='/myOrder'>My Order</CustomLink></li> :
      <></>

    }
   
    
    
    {
           user?.uid?
           <li><CustomLink onClick={singout} to='/' >Log Out</CustomLink></li>:
            <li><CustomLink to='login'>Log in</CustomLink></li> 
         }
</div>

</Navbar.Collapse>
</Container>
</Navbar>
    
</div>
  )}

export default Navber;