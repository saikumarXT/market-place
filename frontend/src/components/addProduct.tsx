import { ButtonComponent } from "./button"

interface addProductProps{
    onClick?:()=>void,
    width:"sm"|"md"|"lg",
    height:"sm"|"md"|"lg",

    titleReference?:any,
    descriptionReference?:any,
    priceReference?:any,
    urlReference?:any,
    categoryReference?:any
}

const widthClass={
    "sm":"w-10",
    "md":"w-14",
    "lg":"w-80"
}


const heightClass={
    "sm":"h-10",
    "md":"h-14",
    "lg":"h-20"
}

const defaultClass='border m-2 rounded-sm pl-3'



export function AddProduct({ titleReference,categoryReference,descriptionReference,priceReference,urlReference, onClick, width , height}:addProductProps){

    return<> 
        <div>
        <div className="flex flex-col">
            <input className={widthClass[width]+" "+ heightClass[height]+" "+ defaultClass}  ref={titleReference} placeholder='title' type="text" />
            <input ref={descriptionReference}  placeholder='description'  type="text" className={widthClass[width]+" "+ heightClass[height]+" "+ defaultClass} />
            <input ref={priceReference}  placeholder='price'  type="text" className={widthClass[width]+" "+ heightClass[height]+" "+ defaultClass} />
             <input ref={categoryReference}  placeholder='category'  type="text" className={widthClass[width]+" "+ heightClass[height]+" "+ defaultClass}  />
            <input ref={urlReference}  placeholder='paste image url...'  type="text" className={widthClass[width]+" "+ heightClass[height]+" "+ defaultClass}  />
        </div>
        <div>
           <ButtonComponent onClick={onClick} text='Add' fontSize="md" width="md" variant="final"/>
        </div>
    </div>
    </>
}