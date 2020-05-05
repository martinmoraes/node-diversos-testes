const path = require('path');
const fs = require('fs');

// const directoryPath = path.join(__dirname);
const directoryPath = __dirname;



fs.readdir(directoryPath, (err, files) => {

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // console.dir(files); // console.table(files);

    files.forEach((file) => {
        console.log(file);
    });
});