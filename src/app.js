// const http = require('http')
// const url = require('url')
// const querystring = require('querystring')
// const fs = require('fs')
// const os = require('os')
const express = require('express')
const app = express()

// app.use((req, res) => {




// })

app.get('/name', (req, res) => {
    res.send('tom1111');
})


app.listen(8888, () => {
    console.log('服务器启动成功')
})

// let user = {
//     admin: 123456
// }

// const server = http.createServer((req, res) => {

//     let path, get, post
//     if (req.method == 'GET') {
//         let { pathname, query } = url.parse(req.url, true)
//         path = pathname
//         get = query
//     } else if (req.method == 'POST') {
//         let arr = []
//         req.on('data', buffer => {
//             arr.push(buffer)
//         })
//         req.on('end', () => {
//             post = querystring.parse(Buffer.concat(arr).toString())
//         })
//     }


//     complete()
//     function complete() {

//         if (path == '/login') {
//             res.writeHead(200, {
//                 'Content-Type': 'text/plain;charset=utf-8'
//             })
//             let { userName, password } = get
//             if (!user[userName]) {
//                 res.end(JSON.stringify({
//                     err: 1,
//                     msg: '用户名不存在'
//                 }))
//             } else if (user[userName] != password) {
//                 res.end(JSON.stringify({
//                     err: 2,
//                     msg: '密码错误'
//                 }))
//             } else {
//                 res.end(JSON.stringify({
//                     err: 0,
//                     msg: '登录成功'
//                 }))
//             }
//         }
//         else if (path == '/reg') { }
//         else {
//             console.log(path)
//             fs.readFile(`.${path}`, (err, data) => {
//                 if (err) {
//                     res.writeHead(404)
//                     res.end('404 not found')
//                 } else {
//                     res.end(data)
//                 }

//             })
//         }
//     }


// })

// server.listen(8888, () => {
//     console.log('服务器启动成功')
// })