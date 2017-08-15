var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Article-one | Rusheel Panakkadan',
    heading:'Article-one',
    date:' August 9,Wednesday,2017.',
    content:`
            <p> 
            I am Rusheel Panakkadan studying Computer Science Engg in Veltech University.I m glad you are reading my article :)
            </p>
            <p>
            I m interested in Networks and Security,and ofcourse hacking. hehe :)
            
            </p>`
};






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});










app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
