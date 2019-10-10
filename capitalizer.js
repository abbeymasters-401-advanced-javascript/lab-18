const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('file-read', contents => {
  contents.contents = contents.contents.toUpperCase();
  socket.emit('file-write', contents);
});