import { ButtonComponent } from "./button";


interface cardProps{
  title:string,
  description:string,
  price:number,
  image:string,
}


interface cardProps{
    placeholder:string,
    width:"sm"|"md"|"lg",
    height:"sm"|"md"|"lg"
    reference?:any
}

const widthClass={
   "sm":"w-20",
    "md":"w-24",
    "lg":"w-80"
}

const heightClass={
     "sm":"h-10",
    "md":"h-12",
    "lg":"h-14"
}

const defaultClass="w-20 shadow border h-20"



function Card({title,description,price,image,placeholder,width,height,reference}:cardProps) {
  return (
    <div className="h-[450px] w-96 rounded-lg border shadow-md">
      <div className="h-64 border">{image}</div>
      <div>
      <p>PRICE: {price}</p>
      <p>{title}</p>
      <p>Description:{description}</p>

     <input placeholder={placeholder} ref={reference} className={ widthClass[width]+" "+heightClass[height]+" "+ defaultClass }/>
      </div> 
      <div className="flex  justify-end">
         <ButtonComponent  text='Send' fontSize="lg" width="lg" variant="final"/>
      </div>
    </div>
  )
}

export default Card
