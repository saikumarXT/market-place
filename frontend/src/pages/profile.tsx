import { ProfileCard } from "../components/profileCard"
import { AddProduct } from "../components/addProduct"
import { useRef } from "react"
import axios from 'axios'
import { useProductLoader } from "../loaders/productLoader"


export  function Profile() {

    const titleRef=useRef<HTMLInputElement>();
    const descriptionRef=useRef<HTMLInputElement>();
    const priceRef=useRef<HTMLInputElement>();
    const imgRef=useRef<HTMLInputElement>();
      const categoryRef=useRef<HTMLInputElement>();
    

    const fetchFUN = useProductLoader();


      async function addNewProduct(){

        const title=titleRef.current?.value;
        const description=descriptionRef.current?.value;
        const price=priceRef.current?.value;
        const img=imgRef.current?.value;
        const category=categoryRef.current?.value;
      
       console.log('title,description,price,img:',title,description,price,img);



      try{
        const res=await axios.post("http://localhost:3000/api/v1/user/products",{
            title,
            description,
            price,
            img,
            category
          },{
            headers:{
              authorization:"Bearer "+localStorage.getItem('token')
            }
          }
        )
        if(res){
          alert("product updated successfully");
                 fetchFUN();
        }
        
      }
      catch(err){
      alert("error is:",err)
      }
    }



  return (
    <div>
      <div>
        <div> <ProfileCard/> </div>
      </div>

      <div>
        <div className="flex ml-10 m-5 mt-2 justify-top border-8 shadow-lg p-5 w-96 ">
        <AddProduct width='lg' descriptionReference={descriptionRef}  titleReference={titleRef} priceReference={priceRef} urlReference={imgRef} categoryReference={categoryRef} onClick={()=>addNewProduct()} height='sm' />
    </div>
      </div>

      <div>
        delete and edit comp 
      </div>

    </div>
  )
}
