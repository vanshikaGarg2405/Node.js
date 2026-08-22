const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end("Hello")
// });
// const Port = 3000;
// server.listen(Port, () => {
//     console.log("Server is Listening....")
// });

const PORT = 4000;
const server = http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET") {
        res.end("You are at home page.");
    }
    else if(req.url === "/About" && req.method === "GET") {
        res.end("You are at about page.");
    }
    else if(req.url === "/Contact" && req.method === "GET") {
        res.end("Contact us");
    }
    else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});
server.listen(PORT, () => {
    console.log("Server is Listening...");
});