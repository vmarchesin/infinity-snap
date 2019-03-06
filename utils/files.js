const fs = require('fs');

async function deleteFile(filename) {
  fs.unlink(filename, function(err) {
    if (err) {
      throw err;
    }
  });
};

async function writeFile(filename) {
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
