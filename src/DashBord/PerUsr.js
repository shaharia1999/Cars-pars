
import React from 'react';
import { toast } from 'react-toastify';


const PerUsr = ({u}) => {
   
    const _id=u?._id;
    const email=u?.email;
    const admin=u?.role;

    
    
    const makeAdmin=()=>{
        fetch(`https://thawing-brushlands-77698.herokuapp.com/admin/${email}`,{
            method:'PUT',
                })
            .then(res=>res.json())
            .then(data=>console.log(data))
              alert(" Make Admin SucessFull");
              window.location.reload()
      
    }
    const Delete=()=>{
        fetch(`https://thawing-brushlands-77698.herokuapp.com/${_id}`,{
            method:'DELETE',
                })
            .then(res=>res.json())
            .then(data=>console.log(data))
              alert(" Make Admin SucessFull");
              window.location.reload()
      
    }
    
    return    <tr><td>{u?.email}</td>
    <td> {
                    !admin && <button className='btn' onClick={makeAdmin} >Make Admin</button>
                }
                {
                    admin && <button className='btn'  > Admin</button>
                }</td>
    <td><button className='btn ' onClick={Delete}>Remove User</button></td>
  </tr>
  
}


export default PerUsr;



