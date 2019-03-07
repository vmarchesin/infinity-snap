const { spawn } = require('child_process');
const readline = require('readline');

async function sh(path, preserveGit) {
  return new Promise(function (resolve, reject) {
    const find = spawn('find', [path, '-type', 'f']);

    let result = find
    if (preserveGit) {
      const grep = spawn('grep', ['-v', 'git'], { stdio: [find.stdout, 'pipe', process.error] });
      result = grep
    }

    let lines = [];
    const rl = readline.createInterface({ input: result.stdout });
    rl.on('line', function(line) {
      lines.push(line);
    });

    result.on('exit', function(data) {
      resolve({ stdout: lines })
    });
  });
}

module.exports = {
  sh,
};
