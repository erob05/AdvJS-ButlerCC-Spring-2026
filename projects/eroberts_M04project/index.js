const http = require('http');
const {readFileSync} = require('fs');
const {generate} = require('./story');

// Get files
/*
const index = readFileSync('./index/index.html');
const home = readFileSync('./index/home.html');
const error = readFileSync('./index/404.html');
const style = readFileSync('./index/style.css');
*/

//Server logic
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(readFileSync('./index/index.html'));
    } else if (url === '/home') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(readFileSync('./index/home.html'));
    } else if (url === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(readFileSync('./index/style.css'));
    } else if (url === '/story' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {body+=chunk;});
        req.on('end', () => {
            const choices = JSON.parse(body);
            const result = generate(choices);
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(result));
        });
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.end(readFileSync('./index/404.html'));
    }
});

//Server call
server.listen(8080);
console.log('Server reached at http://localhost:8080/');