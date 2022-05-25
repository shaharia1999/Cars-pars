
import React from 'react';
import { toast } from 'react-toastify';


const PerUsr = ({u}) => {
   
    const _id=u?._id;
    const email=u?.email;
    const admin=u?.role;

    
    
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/admin/${email}`,{
            method:'PUT',
                })
            .then(res=>res.json())
            .then(data=>console.log(data))
              alert(" Make Admin SucessFull");
              window.location.reload()
      
    }
    const Delete=()=>{
        fetch(`http://localhost:5000/admin/${_id}`,{
            method:'DELETE',
                })
            .then(res=>res.json())
            .then(data=>console.log(data))
              alert(" Make Admin SucessFull");
              window.location.reload()
      
    }
    
    return (
        <div>
            <div className=' grid grid-cols-3 gap-5'>
                <div className='mr-5'><h1>Email :{u?.email}</h1></div>
                <div>
                    {
                        !admin && <button className='btn' onClick={makeAdmin} >Make Admin</button>
                    }
                    {
                        admin && <button className='btn'  > Admin</button>
                    }
                </div>
                <div><button className='btn mt-2' onClick={Delete}>Remove User</button></div>
            </div>
           
            
        </div>
    );
}


export default PerUsr;



