const copydir = require('copy-dir');
const fs = require('fs');

/**
 * @description 复制文件 
 * npm： 
 * @author 柳江
 * @date 02/08/2023
 * @param {*} from
 * @param {*} to
 * @param {*} options
 */
const copyDir = (from, to, options) => {
  // 同步复制
  console.log(from,to);
  // 这东西不能自动创建目录。
  copydir.sync(from, to, options);
}

/**
 * @description 判断路径是否存在
 * @author 柳江
 * @date 02/08/2023
 * @param {*} path
 * @returns {*} 
 */
const checkMkdirExists = (path) => {
  return fs.existsSync(path)
};

exports.checkMkdirExists = checkMkdirExists;
exports.copyDir = copyDir;