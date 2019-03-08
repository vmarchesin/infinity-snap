const { spawn } = require('child_process');

async function gitCommand(command, args) {
  return new Promise(function (resolve, reject) {
    const git = spawn(command, args);
    git.on('exit', function(data) {
      if (data === 128) {
        reject();
      }

      resolve();
     });
  });
}

async function add() {
  return gitCommand('git', ['add', '.']);
}

async function commit() {
  return gitCommand('git', ['commit', '-m', 'Perfectly balanced\n\nAs all things should be']);
}

async function push() {
  return gitCommand('git', ['push', '-f', 'origin', 'master']);
}

module.exports = {
  add,
  commit,
  push,
};
