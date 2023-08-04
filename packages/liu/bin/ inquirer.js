import path from "path";
import { exec } from "child_process";
import ora from "ora";
const LibraryMap = {
  'Ant Design': 'antd',
  'iView': 'view-ui-plus',
  'Ant Design Vue': 'ant-design-vue',
  'element': 'element-plus',
}


export const install = (cmdPath, answers) => {
  const { frame, library} = answers
  // TODO 可以加一个过滤,根据frame，去安装合理ui组件
  // 安装多个依赖时使用 && 拼接
  const command = `pnpm add ${frame} && pnpm add ${LibraryMap[library]}`
  return new Promise((resolve, reject) => {
    const spinner = ora('Loading unicorns').start();
    spinner.start(
      `正在安装依赖，请稍等`
    );
    exec(command,  
    {
      cwd: path.resolve(cmdPath), //设置命令运行环境的路径
    },
    function (error) {
      if (error) {
        reject();
        spinner.fail(`依赖安装失败`);
        return;
      }
      spinner.succeed(`依赖安装成功`);
      resolve()
    })
  })
}

export default {
  install
}