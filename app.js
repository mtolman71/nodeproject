var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', { 
        list: ['first val', '2nd val', '3rd val'],
        nav: [  { Link : 'Services', Text : 'Services'},
                { Link : 'Portfolio', Text : 'Portfolio'},
                { Link : 'About', Text : 'About'},
                { Link : 'Team', Text : 'Team'},
                { Link : 'Contact', Text : 'Contact'}
        ]
    });
});

app.get('/routing', function(req, res){
    res.send('Hello, Routing!');
});

app.listen(port, function(err){
   console.log('The server is running on Port: ' + port); 
});