const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/react_mall', {useNewUrlParser: true, useUnifiedTopology: true})

//连接成功
mongoose.connection.on('connected',()=>{
    console.log('connect success!');
})
//连接失败
mongoose.connection.on('error',(err)=>{
    console.log('connect error,'+err);
})
//连接断开
mongoose.connection.on('disconnected',()=>{
    console.log('connect disconnected');
})

module.exports = mongoose