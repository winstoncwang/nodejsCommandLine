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
