#!/usr/bin/env node
const process = require('process');
const yargs = require('yargs');
const {inquirePrompt} = require('./inquirerPrompt')
const { checkMkdirExists, copyDir, copyFile } = require('./copy');
const path = require('path');
const { readTemplate } = require('./makeTpl')
const { install } = require("./ inquirer")
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
      // TODO 得设置一个参数，来决定啥时候来复制文件还是文件夹
      // const isDirExists = checkMkdirExists(path.resolve(process.cwd(),`./template/${name}`))
      // if (isDirExists) {
      //   // 考虑已经在当前路径下已经执行过该操作,或者已经存在同名文件夹
      //    console.log(`${name}文件夹已存在于${path.resolve(process.cwd(),`./template/${name}`)}`);
      // } else {
      //   console.log(process.cwd()); 
      //   // copyDir这一步复制文件会根据package.json的路径来复制文件？ 
      //   // 因为执行的入口在package.json里面： bin
      //   copyDir(path.resolve(__dirname,`./template/${type}`),path.resolve(process.cwd(),`./template/${name}`))
        
      // }
      // TODO 文件名称得从外边传进来，同时也得暴露出当前cli有哪些文件名称
      const isFileExists = checkMkdirExists(path.resolve(process.cwd(),`./template/${name}/index.jsx`))
      if (isFileExists) {
         console.log(`${name}文件已存在于${path.resolve(process.cwd(),`./template/${name}/index.jsx`)}`);
      } else {
          copyFile(
            path.resolve(__dirname, `./template/${type}/index.txt`),
            path.resolve(process.cwd(), `./template/${name}/index.jsx`),
          )
          readTemplate(path.resolve(process.cwd(), `./template/${name}/index.jsx`),{
            name
          })
          install(process.cwd(), answers);
      }
     })
  }
).argv;
