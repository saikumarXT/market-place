import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../components/button";
import { InputComponent } from "../components/input";
import { useRef } from "react";
import axios from "axios";




 export function SignupPage(){

const userRef=useRef<HTMLInputElement>();
const passwordRef=useRef<HTMLInputElement>();
const navigate=useNavigate();
    
async function signup(){
        const userName=userRef.current?.value;
        const password=passwordRef.current?.value;
        console.log("username and password:",userName,password);

    const res=await axios.post('http://localhost:3000/api/v1/user/signup',{
        userName:userName,
        password:password
    })

    if(res){
    alert('user signed-up successfully');
    navigate('/signin');
    }

    else{
        alert(res)
    }

    }



    return<>
    <div className="flex justify-center h-screen items-center">
    <div className="shadow border w-64 h-56 flex flex-col justify-center " >
    <div className="flex flex-col justify-center items-center">
        <InputComponent reference={userRef} width="lg" height="sm" placeholder=" userName"/>
        <InputComponent reference={passwordRef}  width="lg" height="sm" placeholder=" password"/>
    </div>
     <div className="mt-3 flex  justify-center"> 
        <ButtonComponent onClick={()=>signup()}  text="Signup" height="sm" variant="secondary" width="lg" fontSize="sm"/>
     </div>
    </div>
    </div>
    </>
}