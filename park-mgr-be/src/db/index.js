require('./Schemas/User');
require('./Schemas/InviteCode');

const mongoose = require('mongoose');

const connect = () =>{
  return new Promise((resolve) => {

    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/park-mgr');

    //当数据库打开时 做一些事情
    mongoose.connection.on('open',() =>{
      console.log('连接数据库成功');

      resolve();
    });
  });
};

module.exports = {
  connect,
};
