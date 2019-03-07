#! /usr/bin/env node
const { array, exec: { sh }, fileHelpers } = require('./utils');

async function getFiles(_path, preserveGit) {
  let command = `find ${_path} -type f`
  if (preserveGit) {
    command += ' | grep -v git';
  }

  const { stdout } = await sh(command);

  const shuffledFiles = array.shuffle(
    stdout.split('\n').filter(function(filename) { return filename.length })
  );

  return shuffledFiles;
}

function snap(filenames) {
  for (let file of filenames) {
    fileHelpers.deleteFile(file);
  }
}

async function run({ path: _path = './', preserveGit = false } = {}) {
  const filenames = await getFiles(_path, preserveGit);

  filenames.splice(0, Math.floor(filenames.length / 2));
  snap(filenames);
}

run({ preserveGit: true });
