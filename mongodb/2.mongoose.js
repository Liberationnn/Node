let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/local', {useNewUrlParser: true}, (err, db) => {
    if (err) {
        console.log('数据库连接失败: ' + err);
    } else {
        console.log('数据库连接成功');
    }
});

// 集合的数据模型定义 定义了字段名和字段的类型 默认值
let PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0},
    sex: {type: String},
    time: {type: Date, default: Date.now},
    email: {type: String, default: '@qq.com'}
}, {
    collection: 'Person'
});

// 创建Model 是通过数据库连接创建的
let PersonModel = mongoose.model('Person', PersonSchema);

// 查询操作
PersonModel.find({}, (err, docs) => {
    // console.log(docs);
});
PersonModel.find({}, {}, {skip: 3, limit: 3, sort: {age: -1}}, (err, docs) => {
    console.log(docs);
});
