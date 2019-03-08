#! /usr/bin/env node
const { array, fileHelpers, git, spawn: { sh } } = require('./utils');
const { handleOptions, options, usage } = require('./cli');
const os = require("os");
const chalk = require("chalk");

function printStones() {
  console.log(
    chalk.green('•') +
    chalk.redBright('•') +
    chalk.blueBright('•') +
    chalk.yellow('•') +
    chalk.red('•') +
    chalk.magenta('•')
  );
}

async function getFiles(path, preserveGit, exclude) {
  const { stdout } = await sh(path, preserveGit, exclude);

  return array.shuffle(stdout);
};

function snap(filenames, verbose) {
  printStones();
  console.log(chalk.green('*snap*'));

  for (let file of filenames) {
    if (verbose) {
      console.log(`${chalk.red('Deleting file:')} ${file}`);
    }
    fileHelpers.deleteFile(file);
  }
};

async function run({
  exclude = null,
  path,
  preserveGit = false,
  gitRemote = false,
  verbose = false,
} = {}) {
  const filenames = await getFiles(path, preserveGit, exclude);

  filenames.splice(0, Math.floor(filenames.length / 2));
  snap(filenames, verbose);

  if (gitRemote) {
    try {
      await git.add();
      await git.commit();
      await git.push();
    } catch (err) {
      console.log(chalk.yellow("You're not in a git repository, skipping git actions."));
    }
  }

  console.log(array.random([
    `Mr ${os.userInfo().username}, I don't feel so good...`,
    "Perfectly balanced, as all things should be.",
    "What did it cost?\nEverything."
  ]));
};

handleOptions(options);

run({
  exclude: options.exclude,
  path: options.path || process.cwd(),
  preserveGit: options['preserve-git'],
  gitRemote: options['git-remote'],
  verbose: options.verbose,
});
