var path = require('path');
var express = require('express');
var rewrite = require('express-urlrewrite');
var bodyParser = require('body-parser');

var {handleLogin,handleAuthority} = require('./server/Login.js')

var app = express();
app.set('port', (process.env.PORT || 3000));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/login', function (req, res) {
  console.log('req:',req.body);
  let result = handleLogin(req.body);
  res.json(result);
});

app.use('/resources', express.static(path.join(__dirname, 'dist')));
app.use(rewrite('/*', '/index.html'));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(app.get('port'), function() {
  // console.log(path.join(__dirname, 'public'));
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
