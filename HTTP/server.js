const http = require("http");
const fs = require("fs");
//const JSON = 
// const server = http.createServer((req, res) => {
//     res.end("Hello")
// });
// const Port = 3000;
// server.listen(Port, () => {
//     console.log("Server is Listening....")
// });

const PORT = 4000;
const server = http.createServer((req, res) => {
    // if(req.url === "/" && req.method === "GET") {
    //     //console.log(req.headers);
    //     res.end("You are at home page.");
    // }
    // else if(req.url === "/About" && req.method === "GET") {
    //     res.end("You are at about page.");
    // }
    // else if(req.url === "/Contact" && req.method === "GET") {
    //     res.end("Contact us");
    // }
    // else {
    //     res.statusCode = 404;
    //     res.end("Page not found");
    // }
    // switch(req.url) {
    //     case "/" : {
    //         res.end("You are at home page.");
    //         break;
    //     }
    //     case "/About" :  {
    //         res.end("You are at about page.");
    //         break;
    //     }
    //     case "Conatct" : {
    //         res.end("Contact us");
    //         break;
    //     }
    //     default : {
    //         res.statusCode = 404;
    //         res.end("Page not found");
    //     }
    // }
    if(req.url == "/") {
        const User = {
            name: "Vanshika",
            branch: "CSE",
            roll: "027"
        };
        res.end(JSON.stringify(User));
    }
});
server.listen(PORT, () => {
    console.log("Server is Listening...");
});