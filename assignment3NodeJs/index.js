const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/' || req.url === '/home') {
        filePath = 'home.html';
    } 
    else if (req.url === '/course') {
        filePath = 'course.html';
    } 
    else if (req.url === '/login') {
        filePath = 'login.html';
    } 
    else if (req.url === '/style.css') {
        res.setHeader('Content-Type', 'text/css');
        return fs.createReadStream('style.css').pipe(res);
    } 
    else if (req.url === '/college.jpg') {
        res.setHeader('Content-Type', 'image/jpeg');
        return fs.createReadStream('college.jpg').pipe(res);
    } 
    else {
        res.writeHead(404);
        return res.end("404 Not Found");
    }

    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(filePath).pipe(res);
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});