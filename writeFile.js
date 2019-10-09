const fs = require('fs').promises;

function writeFile(path, contents) {
  return fs.writeFile(path, contents)
   .then(() => {
     socket.emit('saved-event');
   })
}

module.exports = writeFile;