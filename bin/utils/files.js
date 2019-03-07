const fs = require('fs');

function deleteFile(filename) {
  fs.unlink(filename, function(err) {
    if (err) {
      throw err;
    }
  });
};

function writeFile(filename) {
  fs.writeFile(filename, '', function(err) {
    if (err) {
      throw err;
    }
  });
}

module.exports = {
  deleteFile,
  writeFile,
};
