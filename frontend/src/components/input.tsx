
interface inputProps{
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
    "lg":"h-16"
}

const defaultClass="w-20 shadow border h-20"


export  function InputComponent({placeholder,width,height,reference}:inputProps) {
  return<input placeholder={placeholder} ref={reference} className={ widthClass[width]+" "+heightClass[height]+" "+ defaultClass }/>
}
