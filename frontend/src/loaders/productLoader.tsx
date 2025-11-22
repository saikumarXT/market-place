
import { useSetRecoilState } from "recoil";
import { productState } from "../atoms/dataAtom";
import axios from "axios";

 export function useProductLoader(){
 const setProducts=useSetRecoilState(productState);



  async function fetchFUN(){
      try{
        console.log(" at fetch products ")
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
  console.log('triggered');
    }
  return fetchFUN;
}


