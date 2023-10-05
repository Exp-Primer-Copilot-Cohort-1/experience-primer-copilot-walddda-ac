// create web server

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/add_comment', (req, res) => {
    const name = req.body.name;
    const comment = req.body.comment;
    const date = new Date();

    fs.appendFile('comments.txt', `${name} : ${comment} : ${date}\n`, (err) => {
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});