const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890')
const readFile = require('./file-reader');



socket.emit('file-read', fs.readFile[process.argv[2]]);