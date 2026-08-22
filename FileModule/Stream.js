const fs = require("fs");
const readStream = fs.createReadStream("./test.txt");
const writeStream = fs.createWriteStream('./output.txt');
// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     console.log(chunk.toString());
//     writeStream.write(chunk);
// })
readStream.pipe(writeStream);
// readStream.on('end', () => {
//     console.log("File reading completed.");
//     writeStream.end();
// })
writeStream.on("finish", () => {
    console.log("End of stream");
})