import { useChat } from "../loaders/messageLoader";
import { HeaderComponent } from "../components/header";
import {useUserLoader} from "../loaders/userLoader";
import { useState } from "react";

function Message() {
  const userId = useUserLoader();
  const { messages, sendMessage } = useChat(userId);
  const [input, setInput] = useState("");



  function handleSend() {
    const receiver = "123"  
    sendMessage(receiver, input);
    setInput("");
  }

  return (
    <div>
      <HeaderComponent />

      <div className="p-5">
       
        <div className="bg-blue-100 p-5 h-[500px] overflow-y-scroll rounded-xl">

          {messages.map((m, index) => (
            <div key={index} className="p-3 mb-3 bg-white rounded shadow">
              <p><strong>From:</strong> {m.from}</p>
              <p>{m.message}</p>
              <p className="text-xs text-gray-500">
                {new Date(m.timestamp).toLocaleTimeString()}
              </p>
            </div>
          ))}

        </div>

   
        <div className="mt-5 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border w-full p-2 rounded-l"
            placeholder="enter the message"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-5 rounded-r"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
