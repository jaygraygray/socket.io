var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
   console.log("a user has disconnected")
  })

  socket.on('chat message', (msg) => {
   console.log('Most recent message: ', msg)
  })

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3006, function(){
  console.log('listening on *:3000');
});