import Mustache from "Mustache";
import fs from "fs";
import { mkdirGuard } from "./copy.js";

/**
 * 
 * @param {*} path, 文件路径
 * @param {*} data, 数据
 */
export const readTemplate = (path, data) => {
  mkdirGuard(path)
  const file = fs.readFileSync(path, 'utf8')
  const output = Mustache.render(file, data);
  // 写入文件
  fs.writeFileSync(path, output)
}

export default {
  readTemplate
}