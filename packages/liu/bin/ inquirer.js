const path = require('path');
const { exec } = require('child_process')

const LibraryMap = {
  'Ant Design': 'antd',
  'iView': 'view-ui-plus',
  'Ant Design Vue': 'ant-design-vue',
  'element': 'element-plus',
}


const install = (cmdPath, answers) => {
  const { frame, library} = answers
  // TODO 可以加一个过滤,根据frame，去安装合理ui组件
  // 安装多个依赖时使用 && 拼接
  const command = `pnpm add ${frame} && pnpm add ${LibraryMap[library]}`
  return new Promise((resolve, reject) => {
    exec(command,  
    {
      cwd: path.resolve(cmdPath), //设置命令运行环境的路径
    },
    (error, stdout, stderr) => {
      console.error(`error: ${error}`);
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
    )
  })
}

exports.install = install