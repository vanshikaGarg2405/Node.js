// This could demonstrate File write/cretation in both sync and async mode.
const fs=require('fs');
fs.writeFileSync("./test.txt","Hello Vanshika.");
const FilePath = "./test.txt";
const Content = `Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking. In addition, libraries in Node.js are generally written using non-blocking paradigms. Accordingly, blocking behavior is the exception rather than the norm in Node.js.`;
fs.writeFileSync(FilePath,Content); //It will create a new file if it does not exist, or overwrite the existing file with the new content.
console.log("Bye");

//Using writeFile
fs.writeFile("./test2.txt","Demo of sync write of file.", (err) => {
    if(err) throw err;
    console.log("I am in file");
}) 
console.log("I am out of file");
