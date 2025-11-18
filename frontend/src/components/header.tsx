import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "./button";


export function HeaderComponent() {
const navigate=useNavigate();

  return (
    <div>
    <div className="flex h-20 bg-green-500 items-center gap-">
      <div className="ml-6">
        <p className="font-extrabold font-sarif italic text-3xl text-white ">MARKET PLACE</p>
        <p className=" text-lg font-bold  italic text-white ">a place where people exchange valuable</p>
        </div>


        <div className="flex gap-3 ml-10">

      <div className="text-white"><ButtonComponent onClick={()=>navigate('/fashion')}  text="Fashion" fontSize='lg' width='lg' /></div>
      <div className="text-white mr-4"><ButtonComponent  onClick={()=>navigate('/vehiclepage')}  text="Vehicles" fontSize='lg' width='lg' /></div>
      <div className="text-white  mr-4"><ButtonComponent onClick={()=>navigate('/electronicspage')}  text="Electronics" fontSize='lg' width='lg' /></div>
      <div className="text-white"><ButtonComponent onClick={()=>navigate('/realestateage')}   text="RealEstate" fontSize='lg' width='lg' /></div>
    </div>


    <div className="ml-30 ml-auto text-white font-bold" >
        <ButtonComponent text="Message" fontSize="md" width="lg" variant="final" height="md"/>
    </div>
    </div>
 


      </div>
  )
}

 
