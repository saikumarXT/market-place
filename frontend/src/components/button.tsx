
interface buttonProps{
    text:string;
    variant?:"primary"|"secondary"|"final";
    onClick?:()=>void;
    fontSize:"sm"| "md"|"lg";
    width:"sm"|"md"|"lg";
    height?:"sm"|"md"|"lg";
}

const variantClass={
    "primary":"bg-red-200",
    "secondary":"bg-blue-300",
    "final":"bg-blue-400"
}

const widthClass={
    "sm":"w-20",
    "md":"w-24",
    "lg":"w-32"
}

const fontClass={
    "sm":"text-md",
    "md":"text-xl",
    "lg":"text-2xl" 
}
const heightClass={
    "sm":"h-16",
    "md":"h-20",
    "lg":"h-36" 
}



const defaultClass=' rounded-sm h-8 font-sans font-bold ';

export function ButtonComponent({text,height,fontSize,width,onClick,variant}:buttonProps){

    return<>
    <button onClick={onClick} className={variantClass[variant]+" "+fontClass[fontSize]+"  "+widthClass[width] +" "+heightClass[height]+" "+defaultClass}>{text}</button>
    </>
}