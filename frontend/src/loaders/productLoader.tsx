import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { productState } from "../atoms/dataAtom";
import axios from "axios";


 export function ProductLoader(){
 const setProducts=useSetRecoilState(productState);

    useEffect(()=>{
    const fetchFUN=async()=>{
      try{
        console.log("at axios get fetch data ")
       const response=await axios.get('http://localhost:3000/api/v1/user/products',{
          headers: {
        authorization: "Bearer "+ localStorage.getItem("token"),
      },
       });
  
       const product=response.data.products;
         setProducts(product);
         console.log("after fetching the products")
      }
      catch(err){
      console.log(err)
  }
    }
  fetchFUN();
  },[])
 
    return null;
}


