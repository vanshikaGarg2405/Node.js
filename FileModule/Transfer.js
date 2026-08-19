const fs = require("fs");

const FilePath = "./test.txt";
const content = fs.readFileSync(FilePath);
fs.writeFileSync("./test4.txt", content); 