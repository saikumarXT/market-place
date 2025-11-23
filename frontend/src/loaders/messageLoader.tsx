import { useEffect, useRef, useState } from "react";

export function useChat(userId) {
  const wsRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000"); 

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "register",
          userId:userId,
        })
      );
      console.log("WS connected & registered");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setMessages((prev) => [...prev, data]);
    };

    ws.onclose = () => {
      console.log("WS disconnected");
    };

    return () => ws.close();
  }, [userId]);

  function sendMessage(to: string, message: string) {
    if (!wsRef.current) return;

    wsRef.current.send(
      JSON.stringify({
        type: "sendMessage",
        from: userId,
        to,
        message,
      })
    );
  }

  return {
    messages,
    sendMessage,
  };
}
