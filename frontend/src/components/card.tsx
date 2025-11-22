import { ButtonComponent } from "./button";

interface cardProps{
  title:string,
  description:string,
  price:number,
  image:string,
  placeholder:string,
  width:"sm"|"md"|"lg",
  height:"sm"|"md"|"lg"
  reference?:any
  onClick?:()=>void;
}


const widthClass={
   "sm":"w-20",
    "md":"w-40",
    "lg":"w-80"
}

const heightClass={
     "sm":"h-10",
    "md":"h-12",
    "lg":"h-14"
}

const defaultClass=" shadow border mb-2 mt-2 ml-1  pl-5"



function Card({title,description,price,image,placeholder,width,height,reference}:cardProps) {
  return (
    <div className="h-[450px] w-96 rounded-lg border shadow-md">
      <div className="h-64 border">
        <img src={image} alt='example' className="h-56 w-80 object-cover rounded"/>  </div>
      <div> 
      <p>PRICE: {price}</p>
      <p>{title}</p>
      <p className="h-14">Description:{description}</p>
      <div className=" flex h-10 justify-start">
     <input placeholder={placeholder} ref={reference} className={ widthClass[width]+" "+heightClass[height]+" "+ defaultClass }/>
      </div>
      </div> 
      <div className="flex ml-2 mt-3 justify-end">
         <ButtonComponent  text='Send' fontSize="md" width="md" variant="final"/>
      </div>
    </div>
  )
}


export default Card
