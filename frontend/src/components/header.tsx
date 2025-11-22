import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "./button";
import {ShoppingImage} from "../icons/shoppingImage.js";




export function HeaderComponent() {
const navigate=useNavigate();

  return (
    
    <div>
    <div className="flex h-16  w-full mt-1 mb-8 bg-green-500 items-center gap-">
      <div className="flex ml-2">

        <div><ShoppingImage/></div>

        <div>
        <p className="font-extrabold   text-2xl text-white "> MARKET PLACE</p>
        <p className=" text-sm font-bold   text-white "> a place where people Resell Products </p>
        </div>
        </div>


        <div className="flex  ">
       <div className="text-white ml-4"><ButtonComponent onClick={()=>navigate('/home')}   text="Home" fontSize='lg' width='lg' /></div>
      <div className="text-white ml-0"><ButtonComponent onClick={()=>navigate('/fashion')}  text="Fashion" fontSize='lg' width='lg' /></div>
      <div className="text-white ml-1"><ButtonComponent  onClick={()=>navigate('/vehiclepage')}  text="Vehicles" fontSize='lg' width='lg' /></div>
      <div className="text-white ml-6"><ButtonComponent onClick={()=>navigate('/electronicspage')}  text="Electronics" fontSize='lg' width='lg' /></div>
      <div className="text-white ml-8"><ButtonComponent onClick={()=>navigate('/realestateage')}   text="RealEstate" fontSize='lg' width='lg' /></div>
      
    </div>


    <div className=" flex ml-5 text-white font-bold" >
      <div className="m-2 ml-2"><ButtonComponent onClick={()=>navigate('/message')} text="Messages" fontSize="md" width="md" variant="final" height="md"/></div>  
      <div className="m-2"><ButtonComponent onClick={()=>navigate('/profile')} text="Profile" fontSize="md" width="md" variant="final" height="md"/>
    </div>
    </div> 
    </div>
    


      </div>
  )
}

 
