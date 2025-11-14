import { WebSocket, WebSocketServer } from "ws";
export function webSocketOnlineServer(server) {
    let onlineUser = {};
    const ws = new WebSocketServer({ server });
    ws.on('connection', (ws) => {
        ws.on('message', (message) => {
            const data = JSON.parse(message.toString());
            console.log('message came ');
            if (data.type === 'register') {
                onlineUser[data.userId] = ws;
                console.log('user registered ');
            }
            if (data.type === "sendMessage") {
                const { to, from, message } = data;
                let receiverSocket = onlineUser[to];
                if (receiverSocket) {
                    receiverSocket.send(JSON.stringify({
                        from,
                        message,
                        timestamp: new Date()
                    }));
                    console.log("messaged recived to reciver");
                }
            }
        });
    });
}
/*
import { Server, Socket } from "socket.io";

interface OnlineUsers {
  [userId: string]: string; // userId → socketId
}

export function socketHandler(io: Server) {
  const onlineUsers: OnlineUsers = {};

  io.on("connection", (socket: Socket) => {
    console.log("WS Connected:", socket.id);

    // 1. Register userId when FE connects
    socket.on("register", (userId: string) => {
      onlineUsers[userId] = socket.id;
      console.log("Registered:", userId, "=>", socket.id);
    });

    // 2. Handle sending messages (buyer → seller or seller → buyer)
    socket.on(
      "sendMessage",
      (data: { from: string; to: string; message: string }) => {
        const { from, to, message } = data;

        const receiverSocketId = onlineUsers[to];

        if (receiverSocketId) {
          io.to(receiverSocketId).emit("receiveMessage", {
            from,
            message,
            timestamp: new Date(),
          });
        }

        // TODO: Save message in database (chat history)
      }
    );

    // 3. Cleanup on disconnect
    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);

      // Remove user with this socket id
      for (const userId in onlineUsers) {
        if (onlineUsers[userId] === socket.id) {
          delete onlineUsers[userId];
          break;
        }
      }
    });
  });
}
*/ 
//# sourceMappingURL=socket.js.map