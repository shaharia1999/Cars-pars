import React, { useEffect, useState } from 'react';
import PerUsr from './PerUsr';

const Users = () => {
    const [users,setUser]=useState([]);
    useEffect(()=>{
      fetch('https://thawing-brushlands-77698.herokuapp.com/users')
      .then(res=>res.json())
      .then(data=>setUser(data))
  },[]);
  

    return (
        
            
    <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th>Email</th>
        <th>Action</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map(user=><PerUsr key={user._id} u={user}></PerUsr>)
        }
    </tbody>
  </table>
</div>
 
    );
};

export default Users;