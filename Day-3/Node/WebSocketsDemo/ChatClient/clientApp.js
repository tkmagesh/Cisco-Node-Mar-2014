var http= require("http");
http.createServer(function(req,res){
	require("fs").createReadStream("./chatClient.html").pipe(res);
}).listen(8080);
console.log("chat client app running on port 8080");