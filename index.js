//fs module

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
	//process is a global module made available already
	if (err) {
		console.log(err);
	}

	filenames.forEach((file) => {
		console.log(file);
	});
});
