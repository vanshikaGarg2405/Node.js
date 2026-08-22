// Code to transform data using pipe
const fs = require("fs");
const zlib = require("zlib");
// Create read stream
const readStream = fs.createReadStream("./test.txt");
// Transform 
const gzip = zlib.createGzip();
// Create and write on stream
const writeStream = fs.createWriteStream("./data.txt");

readStream.pipe(gzip)
.pipe(writeStream);
