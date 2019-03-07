#! /usr/bin/env node
const { array, spawn: { sh }, fileHelpers } = require('./utils');
const os = require("os");
const { options, usage } = require('./cli');

async function getFiles(path, preserveGit, exclude) {
  const { stdout } = await sh(path, preserveGit, exclude);

  return array.shuffle(stdout);
};

function snap(filenames, verbose) {
  for (let file of filenames) {
    if (verbose) {
      console.log(`Deleting file: ${file}`);
    }
    fileHelpers.deleteFile(file);
  }
};

async function run({ exclude = null, path, preserveGit = false, verbose = false } = {}) {
  const filenames = await getFiles(path, preserveGit, exclude);

  filenames.splice(0, Math.floor(filenames.length / 2));
  snap(filenames, verbose);
  console.log(array.random([
    `Mr ${os.userInfo().username}, I don't feel so good...`,
    "Perfectly balanced, as all things should be.",
    "What did it cost?\nEverything."
  ]));
}

if (options.help) {
  console.log(usage);

  return;
}

run({
  exclude: options.exclude,
  path: options.path || process.cwd(),
  preserveGit: options['preserve-git'],
  verbose: options.verbose,
});
