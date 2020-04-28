//fs module

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
	//process is a global module made available already
	if (err) {
		console.log(err);
		return;
	}

	const allStats = Array(filenames.length).fill(null);

	filenames.forEach((filename, index) => {
		fs.lstat(filename, (err, stat) => {
			if (err) {
				throw new Error(err);
			}
			allStats[index] = stat;
			// if (!allStats.includes(null)) {
			// 	allStats.forEach((stats, index) => {
			// 		console.log(filenames[index], stats);
			// 	});
			// }
			const ready = allStats.every((stats) => {
				return stats;
			});

			if (ready) {
				allStats.forEach((stats, index) => {
					console.log(filenames[index], stats.isFile());
				});
			}
		});
	});
});
