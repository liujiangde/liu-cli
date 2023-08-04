import inquirer from "inquirer";
// 这玩意返回一个promise
// inquirer 开源库的三个方面的能力
// 询问用户问题
// 获取并解析用户的输入
// 检测用户的答案是否合法
//  example：  pnpm liu c --n=afe
export const inquirePrompt = (argv) => {
  const { name } = argv
  return  inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: '模板名称',
      default: name,
      validate: function (val) {
        if (!/^[a-zA-Z]+$/.test(val)) {
          return "模板名称只能含有英文";
        }
        // if (!/^[A-Z]/.test(val)) {
        //   return "模板名称首字母必须大写"
        // }
        return true;
      },
    },
    {
      type: 'list',
      name: 'type',
      message: '模板类型',
      choices: ['表单', '动态表单', '嵌套表单'],
      filter: function (value) {
        return {
          '表单': "form",
          '动态表单': "dynamicForm",
          '嵌套表单': "nestedForm",
        }[value];
      },
    },
    {
      type: 'list',
      message: '使用什么框架开发',
      choices: ['react', 'vue'],
      name: 'frame',
    }
  ]).then(answers => {
    const { frame } = answers
      if (frame === 'react') {
        return inquirer.prompt([
          {
            type: 'list',
            message: '使用什么UI组件库开发',
            choices: [
              'Ant Design',
            ],
            name: 'library',
          },
        ])
        .then( ans => { return {...ans,...answers}})
        .catch(error => console.log(error))
      }
      if (frame === 'vue') {
        return inquirer.prompt([
          {
            type: 'list',
            message: '使用什么UI组件库开发',
            choices: [
              'element',
            ],
            name: 'library',
          },
        ])
        .then( ans => { return {...ans,...answers}})
        .catch(error => reject(error))
      }
  }).catch(error => reject(error))
}

export default {
  inquirePrompt
}
