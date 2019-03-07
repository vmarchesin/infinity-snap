# Infinity Snap
Delete half of your project files. Perfectly balanced, as all things should be.

[![npm](https://img.shields.io/npm/v/infinity-snap.svg)]()
[![npm](https://img.shields.io/npm/dt/infinity-snap.svg)]()
![Maintenance](https://img.shields.io/maintenance/yes/2019.svg)

## Installation


[![NPM](https://nodei.co/npm/infinity-snap.png)](https://www.npmjs.com/package/infinity-snap)

```bash
npm i -g infinity-snap
```

## Usage

Just run infinity-snap in your current directory, or specify a path:
```bash
infinity-snap /
```

### Options:

<table>
  <thead>
    <th>option</th>
    <th>alias</th>
    <th>description</th>
  </thead>
  <tbody>
    <tr>
      <td>--exclude <u>regex</u></td>
      <td>-e</td>
      <td>Prevent files that match the regex from being deleted.</td>
    </tr>
    <tr>
      <td>--path <u>string</u></td>
      <td>-p</td>
      <td>The path of the directory to run the snap. Everything inside will be selected at random to be deleted.</td>
    </tr>
    <tr>
      <td>--preserve-git</td>
      <td>-g</td>
      <td>Does not delete any files inside '.git' folders. Use this if you don't wish to screw your git repo so you can push the balanced code.</td>
    </tr>
    <tr>
      <td>--verbose</td>
      <td>-v</td>
      <td>Enable logging the deleted files.</td>
    </tr>
    <tr>
      <td>--help</td>
      <td>-h</td>
      <td>Prints the usage guide.</td>
    </tr>
    <tr>
      <td>--version</td>
      <td></td>
      <td>Prints the current software version.</td>
    </tr>
  </tbody>
</table>

# FAQ

### **Why would I need to use this?**

You believe not all code is created equal, but no code is better than the other. The codebase is too big, and it's hard to maintain your project. You need a solution, a quick and effective one. But most of all, you need an impartial solution, one that won't benefit your code over your colleague's. You need a "snap".

### **Seriously, why did you create this?**

Balance must be achieved by all means necessary. Imagine a world where half of the JavaScript frameworks don't exist? Wouldn't that be beautiful? <small>Maybe that's what I should work next.</small>

### **Can I prank people with this?**

Sorry, but this isn't a prank tool. Yes, you can use this on your friend's computer, but it won't be much of a prank. Instead you'll be cleansing your friend's computer, enabling new files to be born and take over those who are gone. You're doing your friend a favor.

### **I deleted some *really* important files accidentally, how do I get them back?**

You can download `infinity-avengers` to retrieve your deleted files back. You only have one chance in 14,000,605 though.

### **I don't want to use npm. How can I cleanse my computer?**

You can use [snap.sh](https://github.com/vmarchesin/infinity-snap/blob/master/snap.sh) to run the exact same thing in bash. It's not as pretty, though.

<small>[snap.sh](https://github.com/vmarchesin/infinity-snap/blob/master/snap.sh) has been taken from [hotvulcan](https://github.com/hotvulcan/Thanos.sh)'s repo</small>

## License

[MIT](https://github.com/vmarchesin/infinity-snap/blob/master/LICENSE)