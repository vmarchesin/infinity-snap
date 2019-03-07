#! /usr/bin/env node
const { array, spawn: { sh }, fileHelpers } = require('./utils');

async function getFiles(path, preserveGit = false) {
  const { stdout } = await sh(path, preserveGit);

  return array.shuffle(stdout);
}

function snap(filenames) {
  for (let file of filenames) {
    fileHelpers.deleteFile(file);
  }
}

async function run({ path, preserveGit = false } = {}) {
  const filenames = await getFiles(path, preserveGit);

  console.log(filenames);
  filenames.splice(0, Math.floor(filenames.length / 2));
  // snap(filenames);
}

let path = process.cwd();
if (process.argv.length > 2) {
  path = process.argv[2];
}

run({ path, preserveGit: true });
