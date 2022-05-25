import React, { useEffect, useState } from 'react';
import PerUsr from './PerUsr';

const Users = () => {
    const [users,setUser]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/users')
      .then(res=>res.json())
      .then(data=>setUser(data))
  },[]);
  

    return (
        <div className=''>
            
            {console.log(users)}
            {
                users.map(user=><PerUsr key={user._id} u={user}></PerUsr>)
            }

        </div>
    );
};

export default Users;