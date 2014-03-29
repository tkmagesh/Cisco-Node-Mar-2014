var connect = require("connect")
	,http = require("http")
	,calculator = require("./calculator")
	,url = require("url");

var app = connect();
app.use(connect.favicon());
app.use(connect.static("public"));
app.use(connect.bodyParser());
app.use(function(req,res,next){
	var pathname = url.parse(req.url).pathname;
	if (pathname === "/calculate"){
		var reqData = req.body;
		var result = calculator[reqData.selectOperator](parseInt(reqData.txtNumber1),parseInt(reqData.txtNumber2));
		res.write(JSON.stringify({ result : result}));
		res.end();
	}
});
http.createServer(app).listen(9090);
console.log("server listening on port 9090");
