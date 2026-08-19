const fs = require("fs");
const readStream = fs.createReadStream("./test.txt");
readStream.on('data', (chunk) => {
    console.log(chunk);
    console.log(chunk.toString());
})
readStream.on('end', () => {
    console.log("File reading completed.");
})

const writeStream = fs.createWriteStream('./output.txt');
readStream.pipe(writeStream);