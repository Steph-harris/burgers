var envs = require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var PORT = process.env.PORT || 8080;
var exphbs = require('express-handlebars');

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});


