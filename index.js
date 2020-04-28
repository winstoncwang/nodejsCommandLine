//fs module

const fs = require('fs');
const util = require('util');

const lstat = util.promisify(fs.lstat); //appropriate Method 1

// const { lstat } = fs.promises;  //appropriate Method 2

fs.readdir(process.cwd(), async (err, filenames) => {
	//process is a global module made available already
	if (err) {
		throw new Error(err);
	}

	for (let filename of filenames) {
		try {
			const stats = await lstat(filename);
			console.log(filename, stats.isFile());
		} catch (err) {
			throw new Error(err);
		}
	}
});

// const lstat = () => {
// 	return new Promise((resolve, reject) => {
// 		fs.lstat(filename, (err, stats) => {
// 			if (err) {
// 				reject(err);                              //solution 3
// 			}

// 			resolve(stats);
// 		});
// 	});
// };

//const allStats = Array(filenames.length).fill(null);

// filenames.forEach((filename, index) => {

// 	fs.lstat(filename, (err, stat) => {
// 		if (err) {
// 			throw new Error(err);
// 		}
//         allStats[index] = stat;

// 		if (!allStats.includes(null)) {
// 			allStats.forEach((stats, index) => {
// 				console.log(filenames[index], stats);    //solution 1
// 			});
//         }

// 		const ready = allStats.every((stats) => {
// 			return stats;
// 		});
//                                                        //solution 2
// 		if (ready) {
// 			allStats.forEach((stats, index) => {
// 				console.log(filenames[index], stats.isFile());
// 			});
// 		}
// 	});
// });
