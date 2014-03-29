require("http").createServer(function(req,res){
	res.write("<h1>Welcome to Node</h1>");
	res.end();
}).listen(9090);
console.log("Server listening on port 9090");