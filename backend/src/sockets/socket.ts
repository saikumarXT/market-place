import { WebSocket ,WebSocketServer } from "ws";


interface user {
[user:string]:WebSocket
}

export function webSocketOnlineServer(server:any){
let onlineUser:user={ }

    const ws=new WebSocketServer({server});


ws.on('connection',( ws:WebSocket )=>{ 

    ws.on('message',(message:any)=>{        /*"{\"type\":\"register\",\"userId\":\"123\"}"*/
        const data=JSON.parse(message.toString());
        
        console.log('message came ')


       if(data.type==='register'){ 
        onlineUser[data.userId]=ws;
         console.log('user registered ')
       }

         

       if(data.type === "sendMessage"){
        const {to,from,message}=data;
        let receiverSocket=onlineUser[to];
        
            if(receiverSocket ){
              receiverSocket.send(
                 JSON.stringify({   /*{ from: "123", message: "hello" }*/ /*"{\"from\":\"123\",\"message\":\"hello\"}" */
                    from,
                    message,
                    timestamp:new Date()
                 })
              )
              console.log("messaged recived to reciver")
            }
       }
    })
})

}

