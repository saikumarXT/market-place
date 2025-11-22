import { productState } from "../atoms/dataAtom";
import { useProductLoader } from "../loaders/productLoader"
import { useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";


export function UpdateCard() {
const fetchFun=useProductLoader();
const products=useRecoilValue(productState)
const setProduct=useSetRecoilState(productState);


    async function handleChange(index,field,value){
        console.log(index,field,value);
            setProduct((prev) =>{
            const update = [...prev];
            update[index] = {...update[index],[field]: value      
            };

            return update;
        })
    }


    async function deleteProduct(documentId){
        const id=documentId;
        console.log('inside delete route:',id);
       try{
        const response=await axios.delete('http://localhost:3000/api/v1/user/products', {
            data:{
                documentId: id
            },
            headers: {
                authorization: "Bearer " + localStorage.getItem('token')
            }
        });
        if(response){
            alert('product deleted successfully ')
            fetchFun();
        }
    }

    catch(err){
        alert(err)
    }
}

    async function updateProduct(documentId){
        const editedProduct=products.find(({_id})=>
            ( _id === documentId)
        )
        try{
        const response=await axios.put('http://localhost:3000/api/v1/user/products',{
            editedProduct
        },{
            headers:{
                authorization:"Bearer "+localStorage.getItem('token')
            }
        })
        if(response){
            alert('product updated successfully')
            fetchFun();
        }
    }
     catch(err){
        alert(err)
    }
}

  return (
    <div>
        <div className="border shadow-xl grid grid-cols-3 m-5">
            {products.map(({title,description,price,category,img,_id}:any, index:number) => (
                    
                <div key={_id || index} className="border-2 rounded-md shadow-xl m-5 w-96 ">
                   <div className="">
                    <div className="flex justify-center">
                    <img  alt='profile'src={img} className="h-44 felx justify-center items-center w-44" />
                    </div>

                    <p className="font-extralight ml-2 ">Title:</p>

                   <input className='w-72 h-8 m-1 border rounded-sm pl-2 font-serif ml-2'  value={title}  onChange={(e)=> handleChange(index,"title",e.target.value)} />
                   
                    <p  className="font-extralight ml-2 ">Description:</p>
                   <input className='w-80 h-8 ml-2 m-1 border rounded-sm pl-2 font-serif ' value={description} onChange={(e)=> handleChange(index,"description",e.target.value)}/>
                    <p  className="font-extralight ml-2 ">Price:</p>
                    <input className='w-24 h-8 m-1 border rounded-sm pl-2 font-serif ml-2' value={price} onChange={(e)=> handleChange(index,"price",e.target.value)}/>
                     <p  className="font-extralight ml-2 ">category:</p>
                    <input className='w-56 h-8 m-1 border rounded-sm pl-2 font-serif ml-2 ' value={category} onChange={(e)=> handleChange(index,"category",e.target.value)}/>
                     <p  className="font-extralight ml-2 ">imageUrl:</p>
                    <input className='w-72 h-8 m-1 border rounded-sm pl-2 font-serif ml-2 ' value={img} onChange={(e)=> handleChange(index,"img",e.target.value)}/>
                    </div>
                    
                    <div className="flex justify-center align-middle">
                    <div><button className="bg-blue-300 m-2 h-8 w-20 text-xl font-serif rounded-md"  onClick={()=>updateProduct(_id)}> Update</button></div>
                    <div><button className="bg-blue-300 m-2 h-8 w-20 text-xl font-serif   rounded-md "  onClick={()=>deleteProduct(_id)}> Delete </button></div>
                </div>
                  </div>
            ))}
        </div>
        <div></div>
    </div>
        )
    }


export default UpdateCard

