const mongoose = require("../mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        maxLength: [20, '用户名最长20个字符'],
        minLength: [1, '用户名最短1个字符'],
        required: true
    },
    password: {
        type: String,
        maxLength: [16, '密码最长16个字符'],
        minLength: [6, '密码最短6个字符'],
        required: true
    },
    nickName: {
        type: String,
        maxLength: [20, '昵称最长20个字符'],
        minLength: [1, '昵称最短1个字符'],
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
    },
    tags: {
        type: Array,
    },
    country: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
});

module.exports = userSchema