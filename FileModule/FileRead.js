const fs = require('fs');
const FilePath = "./test.txt";
const content = fs.readFileSync(FilePath, "utf-8"); // reading content of an existing file synchronously
console.log(content);

// Reading file asynchronously
fs.readFile(FilePath, "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
})