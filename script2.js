var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var path  = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/', function(req,res){
     res.render('calc',{
     	title : 'customer'
     });
});
app.post('/myaction', urlencodedParser, function(req, res) {
	console.log(req.body);	
  res.render('cal2',{data : req.body});
});
app.listen(3000);