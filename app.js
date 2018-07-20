/*eslint-env node*/
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const favicon = require('serve-favicon');

const server = require('http').createServer(app);
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
app.disable('x-powered-by');

server.listen(port, function() {
  console.log('Start server: port=' + port)
});
