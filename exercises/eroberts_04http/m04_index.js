const http = require('http');
const {readFileSync} = require('fs');
// Get files
const indexpg = readFileSync('./indexbanner/index.html');
const aboutpg = readFileSync('./indexbanner/about.html');
const mainsty = readFileSync('./indexbanner/main.css');
const banimg = readFileSync('./indexbanner/banner_forest.png');

const server = http.createServer((req, res)=> {
    // res.write('This is text.');
    // res.writeHead(200,{'content-type':'text/html'});
    // res.write('<h1>This is a Title</h1><p>This is a paragraph.</p>');
    // res.end();

    const url = req.url;

    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        // res.write('<h1>This is a Title</h1><p>This is a paragraph.</p>');
        res.write(indexpg);
        res.end();
    } else if(url === '/main.css') {
        res.writeHead(200,{'content-type':'text/css'});
        res.write(mainsty);
        res.end();
    } else if(url === '/banner_forest.png') {
        res.writeHead(200,{'content-type':'image/x-png'});
        res.write(banimg);
        res.end();
    } else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'});
        // res.write('<h1>About Us</h1><p>This is some about us. So many facts. Blah blah.</p>');
        res.write(aboutpg);
        res.end();
    } else {
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }
});

server.listen(8080);
console.log('Server reached at http://localhost:8080/');