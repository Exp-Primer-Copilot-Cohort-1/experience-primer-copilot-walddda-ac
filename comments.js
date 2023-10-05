// create web server
// 1. import express
const express = require('express')
// 2. create web server object
const app = express()
// 3. listen to port 3000
app.listen(3000, function () {
    console.log("server running at http://