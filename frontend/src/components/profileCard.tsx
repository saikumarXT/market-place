import { useEffect, useState } from "react"
import axios from "axios"
import { AddProduct } from "./addProduct";

export function ProfileCard(){
    const [user,setUser]=useState();

    useEffect(()=>{
        const fetchProfile=async()=>{
        const response=await axios.get('http://localhost:3000/api/v1/user/profile',{
            headers:{
                authorization: "Bearer "+ localStorage.getItem('token')
            }
        })
        const users=response.data.user;
        setUser(users.userName);
        console.log(users.userName);
        }
        fetchProfile();
    },[])

    return(<>
    <div>
        <p className="bold font-serif">Profile-Name: {user}</p>
        <p className="bold font-serif mt-5 ml-44">Add Products</p>
    </div>
    <div className="flex ml-10 m-5 mt-2 justify-top border-8 shadow-lg p-5 w-96 ">
        <AddProduct width='lg' onClick={()=>console.log("hello")} height='sm' />
    </div>
    </>)
}