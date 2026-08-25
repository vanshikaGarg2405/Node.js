import http from 'http';
const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === "POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            console.log("Raw Data:", body);
            const user = JSON.parse(body);
            console.log("Paser Data: ", user);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                message: "User created successfully",
                user: user
            }));
        });
    } else {
        res.end("Not Found");
    }
});

    server.listen(3000, () => {
    console.log("Server running ................");
});