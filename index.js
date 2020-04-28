//fs module

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
	//process is a global module made available already
	if (err) {
		console.log(err);
		return;
	}

	console.log('-------------------------------');
	filenames.forEach((file) => {
		return fs.lstat(`${process.cwd()}/${file}`, (err, stat) => {
			if (err) {
				throw new Error(err);
			}
			console.log(file, stat.isFile());
		});
	});
});
