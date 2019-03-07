const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');

const usageDefinitions = [
  {
    header: 'Infinity Snap',
    content: 'Delete half of your files. Perfectly balanced, as everything should be.',
  },
  {
    header: 'Examples',
    content: [
      '$ infinity-snap ./src -v -g',
      '$ infinity-snap -e node_modules',
      "$ infinity-snap / {bold Don't do this}",
    ],
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'exclude',
        alias: 'e',
        typeLabel: '{underline regex}',
        description: "Prevent files that match the regex from being deleted.",
      },
      {
        name: 'path',
        alias: 'p',
        description: 'The path of the directory to run the snap. Everything inside will be selected at random to be deleted.',
      },
      {
        name: 'preserve-git',
        alias: 'g',
        description: "Does not delete any files inside '.git' folders. Use this if you don't wish to screw your git repo so you can push the balanced code.",
      },
      {
        name: 'verbose',
        alias: 'v',
        description: 'Enable logging the deleted files.',
      },
      {
        name: 'help',
        description: 'Print this usage guide.',
      },
    ],
  },
  {
    content: 'Github: {underline https://github.com/vmarchesin/infinity-snap}',
  },
];

const optionDefinitions = [
  { name: 'exclude', alias: 'e', type: String },
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'preserve-git', alias: 'g', type: Boolean },
  { name: 'path', alias: 'p', type: String, multiple: false, defaultOption: true },
  { name: 'verbose', alias: 'v', type: Boolean },
  { name: 'version', type: Boolean },
];

function handleOptions(opt) {
  if (options.help) {
    console.log(usage);
    process.exit(0);
  }

  if (options.version) {
    console.log('v0.5.0');
    process.exit(0);
  }
};

const options = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(usageDefinitions);

module.exports ={
  handleOptions,
  options,
  usage,
};
