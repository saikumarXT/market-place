
interface inputProps{
    placeholder:string,
    width:"sm"|"md"|"lg",
    height:"sm"|"md"|"lg"
    reference?:any
}
const widthClass={
   "sm":"w-16",
    "md":"w-20",
    "lg":"w-44"
}
const heightClass={
     "sm":"h-9",
    "md":"h-12",
    "lg":"h-16"
}

const defaultClass="w-20 pl-8 m-1 shadow border h-20"


export  function InputComponent({placeholder,width,height,reference}:inputProps) {
  return<input placeholder={placeholder} ref={reference} className={ widthClass[width]+" "+heightClass[height]+" "+ defaultClass }/>
}
