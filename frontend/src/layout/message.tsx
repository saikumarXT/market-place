import { ButtonComponent } from "../components/button"
import { HeaderComponent } from "../components/header"


function Message() {
  return (
    <div>
      <HeaderComponent/>
    <div className="m-5">
      <div className=" flex flex-row gap-5  justify-center">
        <div className=" bg-blue-100 border shadow-2xl h-[450px] w-[590px]">left </div>
      </div>
      <div className="flex ">
        <input className="w-[495px] ml-72  border" placeholder="enter the message " type="text" />
        <ButtonComponent text="send" variant="final" width="md" height="lg" fontSize="md"/>
      </div>
    </div>
    </div>
  )
}

export default Message
