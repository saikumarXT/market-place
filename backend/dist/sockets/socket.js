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
//# sourceMappingURL=socket.js.map