#! /usr/bin/env node
const { array, spawn: { sh }, fileHelpers } = require('./utils');
const os = require("os");

async function getFiles(path, preserveGit = false) {
  const { stdout } = await sh(path, preserveGit);

  return array.shuffle(stdout);
};

function snap(filenames) {
  for (let file of filenames) {
    fileHelpers.deleteFile(file);
  }
};

async function run({ path, preserveGit = false } = {}) {
  const filenames = await getFiles(path, preserveGit);

  filenames.splice(0, Math.floor(filenames.length / 2));
  // snap(filenames);
  console.log(array.random([
    `Mr ${os.userInfo().username}, I don't feel so good...`,
    "Perfectly balanced, as all things should be.",
    "What did it cost?\nEverything."
  ]));
}

let path = process.cwd();
if (process.argv.length > 2) {
  path = process.argv[2];
}

run({ path, preserveGit: true });
