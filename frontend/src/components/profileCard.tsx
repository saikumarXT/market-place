import { useEffect, useState } from "react"
import axios from "axios"



export function ProfileCard(){
    const [userData,setUserData]=useState();


    useEffect(()=>{
        const fetchProfile=async()=>{
        const response=await axios.get('http://localhost:3000/api/v1/user/profile',{
            headers:{
                authorization: "Bearer "+ localStorage.getItem('token')
            }
        })
        const user=response.data.user;
        setUserData(user.userName);

        console.log(user.userName);
        console.log(user._id);
        localStorage.setItem("userId",user._id);
        }

        fetchProfile();
    },[])

    return(<>
    <div className="bold font-serif  bg-red-400">
        <p >&nbsp;&nbsp;&nbsp;&nbsp;Profile-Name:&nbsp;{userData} &nbsp;&nbsp; ||&nbsp;&nbsp;&nbsp; Address: kukatpally,&nbsp; medchal, hyd, 50007 &nbsp;&nbsp;   || &nbsp;&nbsp;&nbsp;    mobile :972452554* </p>
        <p></p>
        <p></p>
    </div>      
    <div className="flex  border border-black w-full h-8 mt-1 justify-center ">
       <p className="font-thin m-1  ">* Add NewProducts  *</p>
    </div>
    </>)
}