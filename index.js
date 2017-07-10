var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {



  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  
});

http.listen(3006, function(){
  console.log('listening on *:3000');
});