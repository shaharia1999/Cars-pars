import { useEffect, useState } from "react";


const Usetoken = (user) => {
    const [token,SetToken]=useState('')
    const email=user?.user.email;
    const currenUser={email:email}
    useEffect(()=>{
        if(email){
                 fetch(`http://localhost:5000/user/${email}`, {
             method: 'PUT',
             headers: {
             'Content-type': 'application/json'
           },
           body: JSON.stringify(currenUser),
         })
          .then((response) => response.json())
          .then((data) => console.log(data));
        }
      

    },[user])
    return [token]
   
};

export default Usetoken;




