const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const output = fs.createWriteStream(path.join(__dirname, 'mydir.zip'));


const archive = archiver('zip', {
  zlib: { level: 9 }
});

// Listen for any errors
output.on('close', function () {
  console.log(`ZIP archive created successfully: ${archive.pointer()} total bytes`);
});

// Catch errors during the archiving process
archive.on('error', function (err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Append the entire directory ('mydir') to the archive
archive.directory('mydir/', false);

// Finalize the archive (finish the process)
archive.finalize();
