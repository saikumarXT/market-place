import { productState } from "../atoms/dataAtom";
import { useProductLoader } from "../loaders/productLoader"
import { useRecoilValue } from "recoil";

function UpdateCard() {
const fetchFun=useProductLoader();
const products=useRecoilValue(productState)


    async function deleteProduct(documentId){



    }

    async function updateProduct(documentId){



    }

  return (
    <div>
        <div>
            {products.map(({title,description,price,category,img,_id}:any) =>(
                <div>
                <div>
                    <div><input value={title} type='text'/></div>
                    <div><input value={description} type='text'/></div>
                    <div><input value={price} type='text'/></div>
                    <div><input value={category} type='text'/></div>
                    <div><input value={img} type='text'/></div>
                </div>
                <div>
                    <div><button onClick={updateProduct(_id) }>edit</button></div>
                    <div><button onClick={deleteProduct(_id)}>delete</button></div>
                </div>
                </div>
            ))}
        </div>
        <div></div>
    </div>
        )
    }

export default UpdateCard

 /*
 <div><input type="text" /></div>
            <div><input type="text" /></div>
            <div><input type="text" /></div>
            <div><input type="text" /></div>
            <div><input type="text" /></div>*/