const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello GitHub Actions CI Pipeline");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});