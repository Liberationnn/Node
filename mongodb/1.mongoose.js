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

// 添加新字段
PersonSchema.add({password: {type: String});

// 创建Model 是通过数据库连接创建的
let PersonModel = mongoose.model('Person', PersonSchema);

// 创建Model实例
let personEntity = new PersonModel({
    name: '会长',
    age: 22,
    sex: '男',
    email: '929305590@qq.com'
});

// 通过实例保存文档
// personEntity.save((err, doc) => {
//     if (err) {
//         console.log('保存出错: ' + err);
//     } else {
//         console.log('保存成功: ' + doc);
//     }
// });

// 通过Model保存文档
// PersonModel.create([{"name": "皮皮", "age": 22, "sex": "男", "email": "183428323@qq.com",}, {"name": "素兮", "age": 21, "sex": "女", "email": "1163261380@qq.com",}, {"name": "钟爱", "sex": "男", "age": 21, "email": "3156641748@qq.com",}, {"name": "小跳", "age": 24, "sex": "女", "email": "857457086@qq.com",}, {"name": "老哥", "age": 35, "sex": "男", "email": "395645277@qq.com",}, {"name": '会长', "age": 22, "sex": '男', "email": '929305590@qq.com'}]);

// 查询操作
PersonModel.find({}, (err, docs) => {
    console.log(docs);
});
