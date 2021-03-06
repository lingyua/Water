let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/article', { useNewUrlParser: true });  //连接数据库

const articleSchema = new mongoose.Schema({  //schema
    time: String,
    local: Object,
    num: String,
    openId: String,
    down: Number
})

module.exports = mongoose.model('article', articleSchema);  // model