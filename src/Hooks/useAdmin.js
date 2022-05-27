import { useEffect, useState } from "react"

const useAdmin=user=>{
    const[admin,setAdmin]=useState(false);
    
    useEffect(()=>{
        const email=user?.email;
        if(email){
            fetch(`https://thawing-brushlands-77698.herokuapp.com/users ${email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data))

        }
        return admin;

    },[])
}
export default useAdmin;