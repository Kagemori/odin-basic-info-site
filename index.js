#!/usr/bin/env node

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     let filePath = path.join(
//         __dirname,
//         req.url === '/' ? 'index.html' : req.url
//     )

//     let contentType = 'text/html'

//     let extName = path.extname(filePath)
//     if(!extName){
//         filePath += '.html'
//         extName = '.html'
//     }

//     fs.readFile(filePath, (err, content) => {
//         if(err) {
//             if(err.code === 'ENOENT') {
//                 fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
//                     res.writeHead(200, {'Content-Type' : 'text/html'})
//                     res.end(content, 'utf-8')
//                 })
//             } else {
//                 res.writeHead(500);
//                 res.end(`Server error : ${err.code}`)
//             }
//         } else {
//             res.writeHead(200, {'Content-Type': contentType})
//             res.end(content, 'utf8')
//         }
//     })
// })

// const PORT = process.env.PORT || 8080

// server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

const express = require("express");
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname,'about.html'))
});

app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname,'contact-me.html'))
});

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname,'404.html'))
});

app.listen(PORT, () => {
    console.log(`Server listening at Port: ${PORT}`);
});