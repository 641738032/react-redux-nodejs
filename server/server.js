const express = require('express');

const app = express();
// 使用nodemon 实现express热更新 每次修改不用重新启动
// app.get get接口
// app.post post接口
// app.use 使用模块
// res.send res.json,res,sendfile响应不同的内容
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})
app.get('/data', function (req, res) {
    res.json({
        name: "zhuxl",
        type: "IT"
    })
})
app.listen(9093, function () {
    console.log("Node app start at port 9093");
})