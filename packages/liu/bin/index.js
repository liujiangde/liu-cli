#!/usr/bin/env node
const process = require('process');
const yargs = require('yargs');
const {inquirePrompt} = require('./inquirerPrompt')
const { checkMkdirExists, copyDir  } = require('./copy');
const path = require('path');
// Yargs 通过解析参数和生成优雅的用户界面，帮助你构建交互式命令行工具。
// example: pnpm liu --name=orderPage
yargs.command(
  ['create', 'c'],
  '新建一个模板',
  function (yargs) {
    return yargs.option('name', {
      alias: 'n',
      demand: true,
      describe: '模板名称',
      type: 'string'
    })
  },
  function (argv) {
    inquirePrompt(argv).then(answers =>{
      const { name, type } = answers;
      // process.cwd() 执行命令所在目录
      const isDirExists = checkMkdirExists(path.resolve(process.cwd(),`./pages/${name}`))
      if (isDirExists) {
         console.log(`${name}文件夹已存在`);
      } else {
        // 在那个目录下操作就在那个目录下放复制的文件
        copyDir(path.resolve(__dirname,`./template/${name}`),path.resolve(process.cwd(),`./${name}`))
      }
     })
  }
).argv;
// console.log('name', yargs.argv.name);
// console.log('name')
