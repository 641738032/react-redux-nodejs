const express = require('express');
const mongoose = require('mongoose');
// 连接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL)
// 连接成功
mongoose.connection.on('connected',function(){
    console.log("mongo connect success");
})
// 类似于mysql的表，mongo里有文档、字段的概念
// 新建一个Schema
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,required: true},
    age:{type:Number,required:true}
}));

// 增删改查 find,findOne查找数据    update更新数据    Remove删除数据
// 新增数据 
// User.create({
//     user: 'xiaofangfang',
//     age: 26
// },function(err,doc){
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
        
//     }
// })
// 删除数据
// User.remove({user:'imooc'},function(err,doc){
//     console.log(doc);
// })
// 更新数据
// update({过滤条件},{修改成啥啥},func(err,doc){})
// User.update({user:'xiaozhu'},{$set: {age: 28}},function (err,doc) {
//     if(!err){
//         console.log("update success: ",doc);
//     }else{
//         console.log(err);
//     }
//   })

// 新建app
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
    // res.json({
    //     name: "zhuxl",
    //     type: "IT"
    // })
    // 查询数据 
    // User.find({},function(err,doc){
    //     res.json(doc)
    // })
    User.findOne({user: "xiaozhu"},function(err,doc){
        res.json(doc)
    })
})
app.listen(9093, function () {
    console.log("Node app start at port 9093");
})