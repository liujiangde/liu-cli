声明自己的命令，在packagejson里面 加个 bin
"bin":{
    "liu" : "/bin/index.js"
  },

然后再目录下执行pnpm link 
这个时候link是在全局添加的软链接
查看方式
pnpm ls -g
移除该link的方式
pnpm unlink -g {packagejson里面name属性值}


注意：
1： npm 和pnpm 的link仓库是不同的
2： 需要指定liu-cli link的版本， 
3； 在 app 文件夹目录下运行
pnpm liu --name=orderPage
> liu "--name=orderPage"
name orderPage

使用到的命令：
 1.pnpm add mustache -F liu-cli 
 Mustache.js - 使用 JavaScript 的无逻辑 {{mustache}} 模板

功能设想：
用户可以自己创建模板，保存到本地，这边添加个路径记录，直接复制



