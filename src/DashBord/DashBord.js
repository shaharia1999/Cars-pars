import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading'
// import useAdmin from '../Hooks/useAdmin'

const DashBord = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user,loading,error);
  if(loading){
    <Loading></Loading>
  }

  const[admin,setAdmin]=useState(false)
    useEffect(()=>{
      const email=user?.email;
      if(email){
        fetch(`http://localhost:5000/admin/${email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data))
        console.log(admin);
        
      
      }
    
    })
 

  

 
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center ">
 
  <Outlet/>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
 
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-black text-white">
      {admin?<li><Link to='AddItem'>Add Item</Link></li>:<></>}
      {admin?  <li><Link to='manageItem'>Manage Item</Link></li>:  <li><Link to='UserOrder'>MY Orders</Link></li>}
      {admin?<li><Link to='user'>Users</Link></li>:<></>}
      <li><a>Profile</a></li>
    

    </ul>
  
  </div>
</div>
    );
};

export default DashBord;