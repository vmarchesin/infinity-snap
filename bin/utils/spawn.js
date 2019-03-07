const { spawn } = require('child_process');
const readline = require('readline');

async function sh(path, preserveGit, exclude) {
  return new Promise(function (resolve, reject) {
    const find = spawn('find', [path, '-type', 'f']);

    let result = find
    if (preserveGit) {
      const grepGit = spawn(
        'grep',
        ['-v', '.git'],
        { stdio: [result.stdout, 'pipe', process.error] },
      );
      result = grepGit
    }

    if (exclude !== null) {
      const grepExclude = spawn(
        'grep',
        ['-v', exclude],
        { stdio: [result.stdout, 'pipe', process.error] },
      );
      result = grepExclude
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
