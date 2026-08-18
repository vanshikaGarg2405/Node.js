// This could demonstrate File write/cretation in both sync and async mode.
const fs=require('fs');
fs.writeFileSync("./test.txt","Hello Vanshika.");
const FilePath = "./test.txt";
const Content = "Good morning, have a nice day.";
fs.writeFileSync(FilePath,Content); //It will create a new file if it does not exist, or overwrite the existing file with the new content.
console.log("Bye");

//Using writeFile
fs.writeFile("./test2.txt","Demo of sync write of file.", (err) => {
    if(err) throw err;
    console.log("I am in file");
}) 
console.log("I am out of file");
