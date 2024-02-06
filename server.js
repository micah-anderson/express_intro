// import express package
// const express = require('express'); //ONLY in commonjs(default)
import express from 'express';
import { log } from 'console';
import path from 'path' // built in to express
// path.resolve => returns where the current file is located (absolute path)
// (It's like pwd in terminal)

// define the server/app
const server = express();
const PORT = 3000;

/*
    RESPONSE TYPES IN EXPRESS
    1- res.send(STRING)
    2- res.json(JSON OBJECT)
    3- res.sendFile(ABSOLUTE PATH as STRING)
    4- res.download(ABSOLUTE PATH as STRING)
    5- res.redirect(URL AS STRING)
*/

// define ENDPOINTS between your server declaration and server.listen function
// endpoint for '/' main, GET method/request
server.get('/', (req, res) => {
    res.send(`HOME PAGE BRO`)
})

// endpoint for '/api', Get method/request
server.get('/api', (req, res) => {
    let student = {
        name: "SpaceMan",
        age: 35,
        superCool: true,
    }
    // in old school (http.createServer)
    // res.writeHead(200, {
    //     "content-type": "application/json"
    // })
    // res.end(JSON.stringify(student))
    res.json(student)
})

// endpoint for '/hello', GET method/request
server.get('/hello', (req, res) => {
    res.send(`Hello, hi everybody!`)
})

// endpoint for '/profile', GET method/request
server.get('/profile', (req, res) => {
    // responsed with a file (index.html)
    // res.sendFile(
    //   `/Users/ysaaffcommandcentre/Documents/BACKEND/3_INTRO_TO_EXPRESS/index.html`
    // );
    res.sendFile(path.resolve() + "/index.html")
})

// endpoint for '/api/users', GET method/request
server.get('/api/users', (req, res) => {
    // send json file
    res.sendFile(path.resolve() + '/users.json')
})

// endpoint '/co' GET method/request
server.get("/co", (req, res) => {
  res.sendFile(path.resolve() + '/server.js');
});

// endpoint '/script' GET method/request
server.get("/script", (req, res) => {
    // redirect ALL other urls to ""
  res.send("<script>alert('People generally just want, helth, peace and harmony! Be nice people out there on the interent.')</script>");
});

// endpoint '/img' GET method/request
server.get("/img", (req, res) => {
  res.sendFile(path.resolve() + '/img.png')
});

// endpoint '/redirect' GET method/request
server.get("/redirect", (req, res) => {
  res.redirect('/script')
});

// endpoint '/download' GET method/request
server.get("/download", (req, res) => {
  res.download(path.resolve() + '/img.png')
});

// endpoint  for ALL GET method/request
server.get('*', (req, res) => {
    res.redirect("/script");
})

// make the server listen / respond on your port (Always in the end)
server.listen(PORT, () => {
    log(`Server is up and running on http://localhost:${PORT}`)
})