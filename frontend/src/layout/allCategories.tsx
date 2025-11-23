import { useRecoilValue } from "recoil";
import Card from "../components/card";
import { HeaderComponent } from "../components/header";
import { productState } from "../atoms/dataAtom";
import { useChat } from "../loaders/messageLoader";
import {useUserLoader} from "../loaders/userLoader";
import { useRef } from "react";

function AllCategories() {
  const products = useRecoilValue(productState);
  const userId = useUserLoader();  // now null | string
  console.log("dddd",userId);

  const messageRef = useRef<HTMLInputElement>(null);

  const { message, sendMessage } = useChat(userId || "");

  function textSend(toId: string) {
    if (!userId) return; // user not loaded yet

    const messageData = messageRef.current?.value;
    sendMessage(toId, messageData);
  }

  return (
    <>
      <HeaderComponent />
      <div>
        <div className="grid gap-6 m-8 mt-12 grid-cols-3">
          {products.map((p) => (
            <Card
              key={p._id}
              title={p.title}
              image={p.img}
              description={p.description}
              width="lg"
              height="sm"
              price={p.price}
              placeholder="send any message..."
              onClick={() => textSend(p._id)}
              reference={messageRef}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllCategories;
