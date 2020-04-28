//fs module

const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const path = require('path');

const targetDir = process.argv[2] || process.cwd(); //input from node with argument[2] (argv) or the current working directory
const lstat = util.promisify(fs.lstat); //appropriate Method 1

// const { lstat } = fs.promises;  //appropriate Method 2

fs.readdir(targetDir, async (err, filenames) => {
	//process is a global module made available already
	if (err) {
		throw new Error(err);
	}

	const statPromises = filenames.map((filename) => {
		return lstat(path.join(targetDir, filename)); //joins to form a full path rather than just the filename
	});

	const allStats = await Promise.all(statPromises); //this takes full advantage of async/promise as this only returns when all promises are resolved.

	for (let stat of allStats) {
		const index = allStats.indexOf(stat);
		if (!stat.isFile()) {
			console.log(chalk.yellow(filenames[index]));
		} else {
			console.log(filenames[index]);
		}
	}

	// for (let filename of filenames) {
	// 	try {
	// 		const stats = await lstat(filename);
	// 		console.log(filename, stats.isFile());     //Method 1/2
	// 	} catch (err) {
	// 		throw new Error(err);
	// 	}
	// }
});
