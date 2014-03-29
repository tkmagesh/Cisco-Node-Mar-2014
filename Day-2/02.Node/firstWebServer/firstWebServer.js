var http = require("http")
 	,url = require("url")
	,fs = require("fs");

http.createServer(function(req,res){
	var fileName = "." + url.parse(req.url).pathname;
	if (!fs.existsSync(fileName)){
		res.statusCode = 404;
		res.end();
	} else {
		var stream = fs.createReadStream(fileName, {encoding : "utf8"});
		/*var dataEventCount = 0;
		stream.on("data",function(dataChunk){
			++dataEventCount;
			res.write(dataChunk);
		});
		stream.on("end",function(){
			console.log("dataEventCount = ", dataEventCount);
			res.end();
		});*/
		stream.pipe(res);
		
		/*
		fs.readFile(fileName,function(err,data){
			if (err){
				res.statusCode = 500;
			} else {
				res.write(data);
			}
			res.end();
		});
		*/
	}
}).listen(9090);
console.log("Server listening on port 9090");