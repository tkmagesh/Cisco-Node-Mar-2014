var ws = require("nodejs-websocket");
var server = ws.createServer(handleConnection);
function handleConnection(con){
	console.log("a new connection is established");
	con.on("text",function(msg){
		/*console.log("message received from the client - ", msg);
		if (msg === "time"){
			var count = 0;
			var timer = setInterval(function(){
				con.sendText(new Date().toString());
				if (++count >= 10) clearInterval(timer);
			},5000);
		}*/
		//chat server implementation
		server.connections.forEach(function(c){
			c.sendText(msg);
		});
	});
}


server.listen(9000);
console.log("socket server listening on port 9000");