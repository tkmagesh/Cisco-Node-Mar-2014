var http = require("http")
 	,url = require("url")
 	,querystring = require("querystring")
 	,calculator = require("./calculator")
	,fs = require("fs");

console.log(calculator);
function serveFile(fileName,res, resObj){
	if (!fs.existsSync(fileName)){
		res.statusCode = 404;
		res.end();
	} else {
		var resRawData = '';
		var stream = fs.createReadStream(fileName, {encoding : "utf8"});
		stream.on('data',function(dataChunk){
			resRawData += dataChunk;
		});
		stream.on('end',function(){
			if (resObj){
				for(var key in resObj){
					var template = "{" + key + "}"
					resRawData = resRawData.replace(template,resObj[key])
				}
			} 
			res.write(resRawData);
			res.end();
		});
		
	}
}
http.createServer(function(req,res){
	var fileName = "." + url.parse(req.url).pathname
		,resObj = {
			txtNumber1 : 0,
			txtNumber2 : 0,
			result : ''
		};
	console.log(fileName);
	if (fileName === "./" || fileName === "./calculator.html"){
		serveFile("./calculator.html",res, resObj);
		return;
	} 
	if (fileName === "./calculate"){
		var reqRawData = '';
		req.on("data",function(dataChunk){
			reqRawData += dataChunk;
		});
		req.on("end",function(){
			var reqData = querystring.parse(reqRawData);
			reqData.result = calculator[reqData.selectOperator](parseInt(reqData.txtNumber1),parseInt(reqData.txtNumber2));
			serveFile("./calculator.html",res,reqData);
			//res.write("<h1>" + result + "</h1>");
			//res.end();
		});
	}
	else {
		res.statusCode = 404;
		res.end();
	}

}).listen(9090);
console.log("Server listening on port 9090");