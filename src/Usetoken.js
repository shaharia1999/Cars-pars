import { useEffect, useState } from "react";


const Usetoken = (user) => {
    const [token,SetToken]=useState('')
    const email=user?.user.email;
    const currenUser={email:email}
    useEffect(()=>{
        if(email){
                 fetch(`https://thawing-brushlands-77698.herokuapp.com/user/${email}`, {
             method: 'PUT',
             headers: {
             'Content-type': 'application/json'
           },
           body: JSON.stringify(currenUser),
         })
          .then(response => response.json())
          .then(data =>{
            const jottoken=data.token;
            localStorage.setItem('accessToken',jottoken)
            console.log(jottoken)
            SetToken(jottoken);
            ;
           
          })
         
          
        }
      

    },[user])
    return [token]
   
};

export default Usetoken;




