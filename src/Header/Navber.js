import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return (
        <div className="navbar navber-bg   text-white  ">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div className='bg-black w-100'>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-2    p-0 shadow  w-80 bg-black">
        <li><Link to='/' >Item 1</Link></li>
        <li tabindex="0">
          <Link to='/' className="justify-between">
            Parent
        
          </Link>
          
        </li>
        <li><Link to='/'>Item 3</Link></li>
      </ul>
      </div>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0 ">
      <li><Link to='/'>Item 1</Link></li>
      <li tabindex="0">
        <Link to='/'>
          Parent
         </Link>
       
      </li>
      <li><Link to='/'>Item 3</Link></li>
    </ul>
  </div>
  
</div>
    );
};

export default Navber;