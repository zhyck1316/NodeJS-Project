const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // * Lodash

    const num = _.random(1,10);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });
    res.setHeader('Content-Type', 'text/html');

    let path = './html_pages/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/index':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-them':
            res.statusCode = 301;
            res.setHeader('Location', './about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('Listening for request port: 3000');
})