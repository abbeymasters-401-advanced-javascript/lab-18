const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('file-write', contents => {
  return writeFile(contents.path, contents.contents)
    .then(data => {
      socket.emit('file-saved', data);
    });
});