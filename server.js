var express = require('express');
var app = express();
var PORT = 3000;
//creating routes
//ADDING MIDDLEWARE
var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		// new Date().toString()
		console.log('Request: '+new Date().toString()+' '+req.method+' '+req.originalUrl);
		next();
	}
};

app.use(middleware.requireAuthentication);

app.use(middleware.logger);
app.get('/about'/*, middleware.requireAuthentication*/,function(req,res){
	res.send('About Us');
});

// app.get('/',function(req,res){
// 	res.send('Hello Express');
// });

app.use(express.static(__dirname+'/public'));
//console.log(__dirname);

app.listen(PORT,function(){
	console.log('Express server started on port: '+PORT);
});

//using Git : git add .
// git commit -a -m "Adding comments"
//.gitignore keeps folders not to be added to git