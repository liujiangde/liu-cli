const  Mustache  = require('Mustache')
const fs = require('fs');
const {mkdirGuard} = require('./copy')
/**
 * 
 * @param {*} path, 文件路径
 * @param {*} data, 数据
 */
const readTemplate = (path, data) => {
  mkdirGuard(path)
  const file = fs.readFileSync(path, 'utf8')
  const output = Mustache.render(file, data);
  // 写入文件
  fs.writeFileSync(path, output)
}

exports.readTemplate = readTemplate