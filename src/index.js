// const mod = require('model');
let http = require('http');
let fs = require('fs');
let url = require('url');
let querystring = require('querystring')
// let mods = new mod('hellw');
// mods.show()

http.createServer((req, res) => {

    // fs.readFile(`${req.url}`, (err, data) => {
    //     if (err) {
    //         res.writeHead(404);
    //         res.end('404 Not Found');
    //     } else {
    //         res.end(data)
    //     }
    // })
    // res.write('index');
    // res.end();

    var a = url.parse(req.url, true)
    console.log(a);
    let result = [];
    req.on('data', buffer => {
        console.log(buffer);
        result.push(buffer);
    })
    req.on('end', () => {
        let data = Buffer.concat(result);
        console.log(querystring.parse(data.toString()));
    })



}).listen(8888);