const express = require('express')
const app = express()

app.get('/name', (req, res) => {
    res.send('tom1111');
})

app.post('/name', (req, res) => {
    res.json({
        name: 'tom',
        age: 11
    })
})

app.listen(8888, () => {
    console.log('服务器启动成功')
})


