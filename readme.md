声明自己的命令，在packagejson里面 加个 bin
"bin":{
    "liu" : "/bin/index.js"
  },

然后再目录下执行npm link 
这个时候link是在全局添加的软链接
查看方式
npm ls -g
移除该link的方式
npm unlink -g {packagejson里面name属性值}


问题1： npm 和pnpm 的link仓库是不同的
2 需要指定liu-cli link的版本， 
3 在 app 文件夹目录下运行
pnpm liu --name=orderPage
> liu "--name=orderPage"
name orderPage

