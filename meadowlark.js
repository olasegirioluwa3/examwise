var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3070);

//404
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send("404 - Not Found");
});

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Meadowlark');
});

app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('Meadowlark');
});

app.listen(app.get('port'), function(){
    console.log('not express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});