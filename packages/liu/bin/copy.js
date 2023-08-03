const copydir = require('copy-dir');
const fs = require('fs');
const path = require('path');

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
  // 这东西不能自动创建目录。
  mkdirGuard(to);
  copydir.sync(from, to, options);
}


/**
 * @description 目录守卫 如果没有这个路径就生成这个路径
 * @author 柳江
 * @date 02/08/2023
 * @param {*} target
 */
const mkdirGuard = (target) => {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }
}

/**
 * @description 判断路径是否存在
 * @author 柳江
 * @date 02/08/2023
 * @param {*} path
 * @returns {*} boolean
 */
const checkMkdirExists = (path) => {
  return fs.existsSync(path)
};

/**
 * @description 判断文件、文件夹是否存在
 * @author 柳江
 * @date 03/08/2023
 * @param {*} filePath
 * @returns {*} void
 */
const checkFileExists= (filePath) => {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('该文件、文件夹不存在');
    } else {
        console.log('该文件、文件夹存在');
    }
});
}

/**
 * @description 复制文件
 * @author 柳江
 * @date 03/08/2023
 * @param {*} from
 * @param {*} to
 */
const  copyFile = (from, to) => {
  const parentPath = path.dirname(to);
  mkdirGuard(parentPath)
  const buffer = fs.readFileSync(from);
  fs.writeFileSync(to, buffer);
  console.log('buffer',from, to);
}

// copyFile 和 copyDir 使用的区别在参数，copyFile 要求参数 from 和参数 to 都精确到文件路径。
exports.mkdirGuard = mkdirGuard
exports.checkMkdirExists = checkMkdirExists;
exports.copyDir = copyDir;
exports.checkFileExists = checkFileExists;
exports.copyFile = copyFile;
