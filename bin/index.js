#! /usr/bin/env node
const { array, spawn: { sh }, fileHelpers } = require('./utils');
const os = require("os");
const commandLineArgs = require('command-line-args')

async function getFiles(path, preserveGit = false) {
  const { stdout } = await sh(path, preserveGit);

  return array.shuffle(stdout);
};

function snap(filenames, verbose) {
  for (let file of filenames) {
    if (verbose) {
      console.log(`Deleting file: ${file}`);
    }
    // fileHelpers.deleteFile(file);
  }
};

async function run({ path, preserveGit = false, verbose = false } = {}) {
  const filenames = await getFiles(path, preserveGit);

  filenames.splice(0, Math.floor(filenames.length / 2));
  snap(filenames, verbose);
  console.log(array.random([
    `Mr ${os.userInfo().username}, I don't feel so good...`,
    "Perfectly balanced, as all things should be.",
    "What did it cost?\nEverything."
  ]));
}

const optionDefinitions = [
  { name: 'verbose', alias: 'v', type: Boolean },
  { name: 'preserve-git', alias: 'g', type: Boolean },
  { name: 'path', type: String, multiple: false, defaultOption: true },
];

const options = commandLineArgs(optionDefinitions);
const path = options.path || process.cwd();

run({ path, preserveGit: options['preserve-git'], verbose: options.verbose });
